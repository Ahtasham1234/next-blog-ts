const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Ahtasham",
        mongodb_password: "dOpsuUKXrFaDvdmG",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Ahtasham",
      mongodb_password: "dOpsuUKXrFaDvdmG",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
