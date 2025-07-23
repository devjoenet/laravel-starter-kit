<script lang="ts">
  import { defineComponent, h, useSlots, cloneVNode, isVNode, type PropType, type VNode } from "vue";
  import type { ListItemProps } from "./types";

  export default defineComponent({
    name: "ListItem",
    props: {
      wrapCol: {
        type: Number as PropType<ListItemProps["wrapCol"]>,
        default: undefined,
      },
      growCol: {
        type: Number as PropType<ListItemProps["growCol"]>,
        default: undefined,
      },
    },
    setup(props) {
      const slots = useSlots();

      return () => {
        const defaultVNodes = slots.default ? slots.default() : [];

        // We only count element nodes for indexing, ignoring text or comments
        let elementIndex = 0;
        const processedVNodes = defaultVNodes.map((vnode: VNode) => {
          // Check if the VNode is a valid element or component that can have classes
          const canHaveClass = isVNode(vnode) && (typeof vnode.type === "string" || typeof vnode.type === "object");

          if (!canHaveClass) {
            // Pass through text, comments, etc., unmodified
            return vnode;
          }

          elementIndex++;
          const newProps: Record<string, any> = { ...vnode.props };
          let needsCloning = false;

          // Check if the current element's index matches a prop
          if (props.wrapCol === elementIndex || props.growCol === elementIndex) {
            const existingClass = newProps.class || "";
            const newClasses: string[] = Array.isArray(existingClass) ? existingClass : [existingClass];

            if (props.wrapCol === elementIndex) {
              newClasses.push("list-col-wrap");
            }
            if (props.growCol === elementIndex) {
              newClasses.push("list-col-grow");
            }
            newProps.class = newClasses.filter(Boolean).join(" ");
            needsCloning = true;
          }

          // Only clone the VNode if we've actually added props to it
          return needsCloning ? cloneVNode(vnode, newProps) : vnode;
        });

        return h("li", { class: "list-row" }, processedVNodes);
      };
    },
  });
</script>
