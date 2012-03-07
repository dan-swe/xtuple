// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @class

  This code is automatically generated and will be over-written. Do not edit directly.

  @extends XM.Record
*/
XM._OpportunityCharacteristic = XM.Record.extend(
  /** @scope XM._OpportunityCharacteristic.prototype */ {
  
  className: 'XM.OpportunityCharacteristic',

  

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": true,
      "read": true,
      "update": true,
      "delete": true
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type Number
  */
  opportunity: SC.Record.attr(Number),

  /**
    @type XM.Characteristic
  */
  characteristic: SC.Record.attr('XM.Characteristic'),

  /**
    @type Number
  */
  value: SC.Record.attr(Number)

});
