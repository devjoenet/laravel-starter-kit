<script setup lang="ts">
  import { Head } from "@inertiajs/vue3";
  import { ref } from "vue";
  import { Alert } from "@/components/devjoenet/Alert";
  import { Avatar, AvatarGroup } from "@/components/devjoenet/Avatar";
  import { Badge } from "@/components/devjoenet/Badge";
  import { Breadcrumbs, BreadcrumbItem } from "@/components/devjoenet/Breadcrumbs";
  import { Button } from "@/components/devjoenet/Button";
  import { Card, CardActions, CardBody, CardImage, CardTitle } from "@/components/devjoenet/Card";
  import { Carousel, CarouselItem } from "@/components/devjoenet/Carousel";
  import { Chat, ChatBubble, ChatImage } from "@/components/devjoenet/Chat";
  import { Checkbox } from "@/components/devjoenet/Checkbox";
  import { Collapse } from "@/components/devjoenet/Collapse";
  import { Countdown } from "@/components/devjoenet/Countdown";
  import { Diff } from "@/components/devjoenet/Diff";
  import { Dock, DockItem } from "@/components/devjoenet/Dock";
  import { Drawer } from "@/components/devjoenet/Drawer";
  import { FileInput } from "@/components/devjoenet/FileInput";
  import { Footer, FooterTitle } from "@/components/devjoenet/Footer";
  import { FormField } from "@/components/devjoenet/FormField";
  import { Hero, HeroContent, HeroOverlay } from "@/components/devjoenet/Hero";
  import { Indicator, IndicatorItem } from "@/components/devjoenet/Indicator";
  import { Input } from "@/components/devjoenet/Input";
  import { Join, JoinItem } from "@/components/devjoenet/Join";
  import { Kbd } from "@/components/devjoenet/Kbd";
  import { Link } from "@/components/devjoenet/Link";
  import { List, ListItem } from "@/components/devjoenet/List";
  import { Loading } from "@/components/devjoenet/Loading";
  import { Mask } from "@/components/devjoenet/Mask";
  import { Navbar } from "@/components/devjoenet/Navbar";
  import { Progress } from "@/components/devjoenet/Progress";
  import { RadialProgress } from "@/components/devjoenet/RadialProgress";
  import { Radio, RadioGroup } from "@/components/devjoenet/Radio";
  import { Rating } from "@/components/devjoenet/Rating";
  import { Select, SelectOption } from "@/components/devjoenet/Select";
  import { Skeleton } from "@/components/devjoenet/Skeleton";
  import { Stack } from "@/components/devjoenet/Stack";
  import { Stat, StatActions, StatDesc, StatTitle, StatValue, Stats } from "@/components/devjoenet/Stat";
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableWrapper } from "@/components/devjoenet/Table";
  import { Textarea } from "@/components/devjoenet/Textarea";
  import { Timeline, TimelineEnd, TimelineItem, TimelineMiddle, TimelineStart } from "@/components/devjoenet/Timeline";
  import { Toast } from "@/components/devjoenet/Toast";
  import { Toggle } from "@/components/devjoenet/Toggle";
  import { Tooltip } from "@/components/devjoenet/Tooltip";
  import { Menu, MenuItem } from "@/components/devjoenet/Menu";

  const drawerOpen = ref(false);
  const form = ref({
    username: "devjoenet",
    bio: "",
    tos: false,
    plan: "pro",
    rating: 4,
    framework: null,
    files: undefined, // changed from null to undefined
    toggle: true,
  });
</script>

<template>
  <Head title="Welcome">
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
  <div class="flex min-h-screen flex-col items-center">
    <div class="max-w-4xl mx-auto grid grid-cols-1 gap-12">
      <h1 class="text-4xl font-bold text-center">Component Demo Page</h1>

      <section>
        <h2 class="text-2xl font-bold mb-4">Alert</h2>
        <Alert color="info">
          <span>This is an informational alert.</span>
        </Alert>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Avatar</h2>
        <AvatarGroup>
          <Avatar sizeClass="w-16">
            <img src="https://picsum.photos/id/237/200/200" alt="Avatar Image" />
          </Avatar>
          <Avatar sizeClass="w-16" placeholder="DJ" ringClass="ring ring-primary" />
          <Avatar sizeClass="w-16" placeholder="+9" />
        </AvatarGroup>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Badge</h2>
        <div class="flex gap-2">
          <Badge>Default</Badge>
          <Badge color="primary">Primary</Badge>
          <Badge color="secondary" badgeStyle="outline">Outline</Badge>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Breadcrumbs</h2>
        <Breadcrumbs>
          <BreadcrumbItem><Link href="#">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link href="#">Library</Link></BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
        </Breadcrumbs>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Button</h2>
        <div class="flex gap-2">
          <Button>Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="accent" btnStyle="outline">Outline</Button>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Card</h2>
        <Card class="bg-base-100 shadow-xl">
          <CardImage src="https://picsum.photos/seed/picsum/400/225" alt="Shoes" />
          <CardBody>
            <CardTitle>Shoes!</CardTitle>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <CardActions>
              <Button>Buy Now</Button>
            </CardActions>
          </CardBody>
        </Card>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Carousel</h2>
        <Carousel class="rounded-box w-96 h-56">
          <CarouselItem v-for="i in 5" :key="i">
            <img :src="`https://picsum.photos/id/${10 + i}/400/300`" class="w-full" alt="Carousel Image" />
          </CarouselItem>
        </Carousel>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Chat</h2>
        <Chat>
          <ChatBubble placement="start">
            <template #image><ChatImage src="https://picsum.photos/id/1005/200/200" /></template>
            <template #header>Obi-Wan Kenobi <time class="text-xs opacity-50">12:45</time></template>
            Hello there.
            <template #footer><span class="opacity-50">Delivered</span></template>
          </ChatBubble>
          <ChatBubble placement="end" color="primary">
            <template #header>General Grievous <time class="text-xs opacity-50">12:46</time></template>
            General Kenobi!
          </ChatBubble>
        </Chat>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Data Input & FormField</h2>
        <div class="p-4 border border-base-300 rounded-lg bg-base-100 flex flex-col gap-4">
          <FormField label="Username" :errors="form.username.length < 3 ? ['Username is too short'] : []">
            <Input v-model="form.username" variant="filled" />
          </FormField>
          <FormField label="Bio">
            <Textarea v-model="form.bio" placeholder="Tell us about yourself" />
          </FormField>
          <FormField label="Framework">
            <Select v-model="form.framework" placeholder="Choose a framework">
              <SelectOption value="vue">Vue</SelectOption>
              <SelectOption value="react">React</SelectOption>
              <SelectOption value="svelte">Svelte</SelectOption>
            </Select>
          </FormField>
          <FormField label="Attachments">
            <FileInput v-model="form.files" />
          </FormField>
          <FormField label="Plan Selection">
            <RadioGroup v-model="form.plan">
              <Radio value="free">Free</Radio>
              <Radio value="pro">Pro</Radio>
              <Radio value="enterprise">Enterprise</Radio>
            </RadioGroup>
          </FormField>
          <FormField label="Settings">
            <Toggle v-model="form.toggle">Enable notifications</Toggle>
          </FormField>
          <FormField label="Terms of Service">
            <Checkbox v-model="form.tos">I agree to the terms and conditions</Checkbox>
          </FormField>
          <Rating v-model="form.rating" clearable />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Collapse</h2>
        <Collapse collapseStyle="arrow" class="bg-base-100">
          <template #title>Click me to show/hide content</template>
          <p>hello</p>
        </Collapse>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Countdown</h2>
        <span class="font-mono text-4xl">
          <Countdown :value="42" />
        </span>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Diff</h2>
        <Diff class="rounded-lg">
          <template #item-one><img alt="daisy" src="https://picsum.photos/id/103/400/200" /></template>
          <template #item-two><img alt="daisy" src="https://picsum.photos/id/103/400/200" class="grayscale" /></template>
        </Diff>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Dock (resize window to see it stick)</h2>
        <div class="w-full h-24 bg-base-100 rounded-lg relative overflow-hidden">
          <Dock>
            <DockItem>Home</DockItem>
            <DockItem active>Menu</DockItem>
            <DockItem>Search</DockItem>
          </Dock>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Drawer</h2>
        <Drawer id="demo-drawer" v-model="drawerOpen">
          <label for="demo-drawer" class="btn btn-primary">Open drawer</label>
          <template #side>
            <Menu class="p-4 w-80 min-h-full bg-base-200">
              <MenuItem><a>Sidebar Item 1</a></MenuItem>
              <MenuItem><a>Sidebar Item 2</a></MenuItem>
            </Menu>
          </template>
        </Drawer>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Footer</h2>
        <Footer class="bg-neutral text-neutral-content rounded-lg">
          <nav>
            <FooterTitle>Services</FooterTitle>
            <Link href="#" linkStyle="hover">Branding</Link>
            <Link href="#" linkStyle="hover">Design</Link>
          </nav>
          <nav>
            <FooterTitle>Company</FooterTitle>
            <Link href="#" linkStyle="hover">About us</Link>
            <Link href="#" linkStyle="hover">Contact</Link>
          </nav>
        </Footer>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Hero</h2>
        <Hero class="min-h-[300px] rounded-lg" style="background-image: url(https://picsum.photos/id/10/800/300)">
          <HeroOverlay class="bg-opacity-60 rounded-lg" />
          <HeroContent class="text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
              <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
              <Button>Get Started</Button>
            </div>
          </HeroContent>
        </Hero>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Indicator</h2>
        <Indicator>
          <IndicatorItem><Badge color="secondary">new</Badge></IndicatorItem>
          <Button>Notifications</Button>
        </Indicator>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Join</h2>
        <Join>
          <JoinItem><Button>Button</Button></JoinItem>
          <JoinItem><Button>Button</Button></JoinItem>
          <JoinItem><Button>Button</Button></JoinItem>
        </Join>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Kbd</h2>
        <div class="flex gap-1"><Kbd>ctrl</Kbd>+<Kbd>c</Kbd></div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">List</h2>
        <List class="bg-base-100 rounded-lg">
          <ListItem :growCol="2">
            <Avatar sizeClass="w-12"><img src="https://picsum.photos/id/1011/100/100" /></Avatar>
            <span>John Doe</span>
            <Button size="sm" btnStyle="ghost">Follow</Button>
          </ListItem>
          <ListItem>
            <span>Jane Smith</span>
          </ListItem>
        </List>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Loading</h2>
        <div class="flex gap-4 items-center">
          <Loading />
          <Loading loadingStyle="dots" />
          <Loading loadingStyle="ring" size="lg" />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Mask</h2>
        <Mask shape="squircle" class="w-24 h-24">
          <img src="https://picsum.photos/id/99/200/200" alt="Masked Image" />
        </Mask>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Navbar</h2>
        <Navbar class="bg-base-100 rounded-box shadow-lg">
          <template #start><Button btnStyle="ghost" class="text-xl">daisyUI</Button></template>
          <template #end><Button>Login</Button></template>
        </Navbar>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Progress & Radial Progress</h2>
        <div class="flex flex-col gap-4">
          <Progress :value="70" />
          <RadialProgress :value="70" />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Skeleton</h2>
        <div class="flex flex-col gap-4">
          <Skeleton heightClass="h-4" widthClass="w-28" />
          <Skeleton heightClass="h-4" widthClass="w-full" />
          <Skeleton heightClass="h-4" widthClass="w-full" />
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Stack</h2>
        <Stack>
          <Card class="bg-primary text-primary-content text-center shadow-md">
            <CardBody><CardTitle>Card 1</CardTitle></CardBody>
          </Card>
          <Card class="bg-secondary text-secondary-content text-center shadow-md">
            <CardBody><CardTitle>Card 2</CardTitle></CardBody>
          </Card>
          <Card class="bg-accent text-accent-content text-center shadow-md">
            <CardBody><CardTitle>Card 3</CardTitle></CardBody>
          </Card>
        </Stack>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Stat</h2>
        <Stats class="shadow bg-base-100 rounded-lg">
          <Stat>
            <StatTitle>Downloads</StatTitle>
            <StatValue>31K</StatValue>
            <StatDesc>Jan 1st - Feb 1st</StatDesc>
          </Stat>
          <Stat>
            <StatTitle>New Users</StatTitle>
            <StatValue>4,200</StatValue>
            <StatActions><Button size="sm">Add more</Button></StatActions>
          </Stat>
        </Stats>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Table</h2>
        <TableWrapper>
          <Table :zebra="true">
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Job</TableHeader>
                <TableHeader>Favorite Color</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Cy Ganderton</TableCell>
                <TableCell>Quality Control Specialist</TableCell>
                <TableCell>Blue</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hart Hagerty</TableCell>
                <TableCell>Desktop Support Technician</TableCell>
                <TableCell>Purple</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Timeline</h2>
        <Timeline>
          <TimelineItem>
            <TimelineStart>1984</TimelineStart>
            <TimelineMiddle><div class="w-4 h-4 rounded-full bg-primary"></div></TimelineMiddle>
            <TimelineEnd class="timeline-box">First Macintosh computer</TimelineEnd>
          </TimelineItem>
          <TimelineItem>
            <TimelineEnd class="timeline-box">iPod</TimelineEnd>
            <TimelineMiddle><div class="w-4 h-4 rounded-full bg-primary"></div></TimelineMiddle>
            <TimelineStart>2001</TimelineStart>
          </TimelineItem>
        </Timeline>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Tooltip & Toast</h2>
        <Tooltip tip="This is a tooltip!">
          <Button>Hover me</Button>
        </Tooltip>

        <Toast>
          <Alert color="success">
            <span>Message sent successfully.</span>
          </Alert>
        </Toast>
      </section>
    </div>
  </div>
</template>
