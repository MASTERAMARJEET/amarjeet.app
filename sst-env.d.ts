/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "MyApi": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "Site": {
      "type": "sst.aws.Astro"
      "url": string
    }
  }
}
export {}
