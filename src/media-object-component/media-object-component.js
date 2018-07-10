
(function MediaObjectDefinition(){

  'use strict';


  class MediaObjectComponent extends Polymer.Element {
    static get is() { return "media-object-component"; }

    static get properties(){
      return {
        default:{type:String,
          value:"default"}
      }
    }

    connectedCallback(){
      super.connectedCallback();
    }

  }
  // Register the new element with the browser
  customElements.define(MediaObjectComponent.is, MediaObjectComponent);

})();
