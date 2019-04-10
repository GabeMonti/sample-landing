/**
 * This file was created to have all the configuration of the application
 *
 * Created by : Gabriel Montibeller
 *
 *
 */

let base22MessageStyle="font-size:21px; font-weight:200; letter-spacing:0.2em; line-height:1.4em; font-family:helvetica,arial; color:#47a0cc;";

const isProduction = process.env.NODE_ENV === 'production'
/* eslint-disable no-console */
/* eslint-enable no-console */


class Config {
  constructor() {
    this.isMobile = (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)

    if(window.location.href.indexOf('develop') > -1) {
      this.setEnv('develop')
    }
    else if(window.location.href.indexOf('localhost') > -1) {
      this.setEnv('local')
    }
    else if(window.location.href.indexOf('qa') > -1) {
      this.setEnv('qa')
    }
  }

  setEnv(env) {
    switch (env) {
      case 'local':
        this.API_URL = 'http://localhost:8011'
        this.GA = ['UA-125778983-1']
      break
    }

  }
}

export default Config
