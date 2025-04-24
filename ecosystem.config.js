module.exports = {
  apps: [{
    name: 'ERP',
    script: 'npm run start',
    env: {
      DB_URI: "postgresql://neondb_owner:npg_mrTRL0Pn7QCx@ep-raspy-leaf-a8pvw1ev-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
      DB_DIALECT: "postgres",
      PORT: "3000"
    }
  }],

  deploy: {
    production: {
      // SSH host
      host: 'testinglesh.tplinkdns.com',
      // GIT remote/branch
      ref: 'origin/master',
      // GIT remote
      repo: 'git@github.com:SolveTechMex/erp-backend.git',
      // Fetch all branches or fast
      fetch: 'all',
      path: '/home/luis/erp-project',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options': 'FordwardAgent=yes',
    }
  }
};