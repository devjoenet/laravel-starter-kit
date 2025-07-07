const Ziggy = {
  url: "http:\/\/starter.test",
  port: null,
  defaults: {},
  routes: {
    "debugbar.openhandler": { uri: "_debugbar\/open", methods: ["GET", "HEAD"] },
    "debugbar.clockwork": { uri: "_debugbar\/clockwork\/{id}", methods: ["GET", "HEAD"], parameters: ["id"] },
    "debugbar.telescope": { uri: "_debugbar\/telescope\/{id}", methods: ["GET", "HEAD"], parameters: ["id"] },
    "debugbar.assets.css": { uri: "_debugbar\/assets\/stylesheets", methods: ["GET", "HEAD"] },
    "debugbar.assets.js": { uri: "_debugbar\/assets\/javascript", methods: ["GET", "HEAD"] },
    "debugbar.cache.delete": {
      uri: "_debugbar\/cache\/{key}\/{tags?}",
      methods: ["DELETE"],
      parameters: ["key", "tags"],
    },
    "debugbar.queries.explain": { uri: "_debugbar\/queries\/explain", methods: ["POST"] },
    "horizon.stats.index": { uri: "horizon\/api\/stats", methods: ["GET", "HEAD"] },
    "horizon.workload.index": { uri: "horizon\/api\/workload", methods: ["GET", "HEAD"] },
    "horizon.masters.index": { uri: "horizon\/api\/masters", methods: ["GET", "HEAD"] },
    "horizon.monitoring.index": { uri: "horizon\/api\/monitoring", methods: ["GET", "HEAD"] },
    "horizon.monitoring.store": { uri: "horizon\/api\/monitoring", methods: ["POST"] },
    "horizon.monitoring-tag.paginate": {
      uri: "horizon\/api\/monitoring\/{tag}",
      methods: ["GET", "HEAD"],
      parameters: ["tag"],
    },
    "horizon.monitoring-tag.destroy": {
      uri: "horizon\/api\/monitoring\/{tag}",
      methods: ["DELETE"],
      wheres: { tag: ".*" },
      parameters: ["tag"],
    },
    "horizon.jobs-metrics.index": { uri: "horizon\/api\/metrics\/jobs", methods: ["GET", "HEAD"] },
    "horizon.jobs-metrics.show": {
      uri: "horizon\/api\/metrics\/jobs\/{id}",
      methods: ["GET", "HEAD"],
      parameters: ["id"],
    },
    "horizon.queues-metrics.index": { uri: "horizon\/api\/metrics\/queues", methods: ["GET", "HEAD"] },
    "horizon.queues-metrics.show": {
      uri: "horizon\/api\/metrics\/queues\/{id}",
      methods: ["GET", "HEAD"],
      parameters: ["id"],
    },
    "horizon.jobs-batches.index": { uri: "horizon\/api\/batches", methods: ["GET", "HEAD"] },
    "horizon.jobs-batches.show": { uri: "horizon\/api\/batches\/{id}", methods: ["GET", "HEAD"], parameters: ["id"] },
    "horizon.jobs-batches.retry": { uri: "horizon\/api\/batches\/retry\/{id}", methods: ["POST"], parameters: ["id"] },
    "horizon.pending-jobs.index": { uri: "horizon\/api\/jobs\/pending", methods: ["GET", "HEAD"] },
    "horizon.completed-jobs.index": { uri: "horizon\/api\/jobs\/completed", methods: ["GET", "HEAD"] },
    "horizon.silenced-jobs.index": { uri: "horizon\/api\/jobs\/silenced", methods: ["GET", "HEAD"] },
    "horizon.failed-jobs.index": { uri: "horizon\/api\/jobs\/failed", methods: ["GET", "HEAD"] },
    "horizon.failed-jobs.show": {
      uri: "horizon\/api\/jobs\/failed\/{id}",
      methods: ["GET", "HEAD"],
      parameters: ["id"],
    },
    "horizon.retry-jobs.show": { uri: "horizon\/api\/jobs\/retry\/{id}", methods: ["POST"], parameters: ["id"] },
    "horizon.jobs.show": { uri: "horizon\/api\/jobs\/{id}", methods: ["GET", "HEAD"], parameters: ["id"] },
    "horizon.index": {
      uri: "horizon\/{view?}",
      methods: ["GET", "HEAD"],
      wheres: { view: "(.*)" },
      parameters: ["view"],
    },
    telescope: { uri: "telescope\/{view?}", methods: ["GET", "HEAD"], wheres: { view: "(.*)" }, parameters: ["view"] },
    home: { uri: "\/", methods: ["GET", "HEAD"] },
    dashboard: { uri: "dashboard", methods: ["GET", "HEAD"] },
    "profile.edit": { uri: "settings\/profile", methods: ["GET", "HEAD"] },
    "profile.update": { uri: "settings\/profile", methods: ["PATCH"] },
    "profile.destroy": { uri: "settings\/profile", methods: ["DELETE"] },
    "password.edit": { uri: "settings\/password", methods: ["GET", "HEAD"] },
    "password.update": { uri: "settings\/password", methods: ["PUT"] },
    appearance: { uri: "settings\/appearance", methods: ["GET", "HEAD"] },
    register: { uri: "register", methods: ["GET", "HEAD"] },
    login: { uri: "login", methods: ["GET", "HEAD"] },
    "password.request": { uri: "forgot-password", methods: ["GET", "HEAD"] },
    "password.email": { uri: "forgot-password", methods: ["POST"] },
    "password.reset": { uri: "reset-password\/{token}", methods: ["GET", "HEAD"], parameters: ["token"] },
    "password.store": { uri: "reset-password", methods: ["POST"] },
    "verification.notice": { uri: "verify-email", methods: ["GET", "HEAD"] },
    "verification.verify": { uri: "verify-email\/{id}\/{hash}", methods: ["GET", "HEAD"], parameters: ["id", "hash"] },
    "verification.send": { uri: "email\/verification-notification", methods: ["POST"] },
    "password.confirm": { uri: "confirm-password", methods: ["GET", "HEAD"] },
    logout: { uri: "logout", methods: ["POST"] },
    "storage.local": { uri: "storage\/{path}", methods: ["GET", "HEAD"], wheres: { path: ".*" }, parameters: ["path"] },
  },
};
declare global {
  interface Window {
    Ziggy: {
      routes: Record<string, any>;
    };
  }
}

if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
