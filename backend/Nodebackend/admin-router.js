const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const mongoose = require('mongoose');
AdminBro.registerAdapter(AdminBroMongoose);

function createdUpdate() {
  return {
    created_at: {
      type: 'datetime',
    },
    // updated_at: {
    //   type: 'datetime',
    // }
  }
}

const Menu = {
  Tags: {
    name: 'Contact-us', icon: 'Events',
  },
}

const resources = [

  // ContactUs
  {
    resource: _Contactus,
    options: {
      parent: Menu.Tags,
      listProperties: ['created_at', 'email', 'name', 'status','message'],
      properties: {
        ...createdUpdate()
      },
      actions: {
        show: { showInDrawer: true },
        edit: { showInDrawer: true },
      }
    },

  },

]

const adminBro = new AdminBro({
  resources: resources,
  branding: {
    logo: '',
    companyName: 'Sustainability Report',
    softwareBrothers: false
  },
  rootPath: '/master',
  loginPath: '/master/login',
  logoutPath: '/master/login',
  locale: {
    translations: {
      messages: {
        loginWelcome: "ESG | German Sustainability Report",
      }
    }
  }
})

const ADMIN = {
  email: 'admin@gmail.com',
  password: 'admin@123123',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    console.log(email,password)
    if (email == ADMIN.email && password == ADMIN.password) {
      return ADMIN;
    }

    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})

// const router = AdminBroExpress.buildRouter(adminBro)

module.exports = router;


