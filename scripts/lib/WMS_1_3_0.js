var WMS_1_3_0_Module_Factory = function () {
  var WMS_1_3_0 = {
    n: 'WMS_1_3_0',
    dens: 'http:\/\/www.opengis.net\/wms',
    tis: [{
        ln: 'LegendURL',
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'ServiceExceptionType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'code',
            an: {
              lp: 'code'
            },
            t: 'a'
          }, {
            n: 'locator',
            an: {
              lp: 'locator'
            },
            t: 'a'
          }]
      }, {
        ln: 'OperationType',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format'
          }, {
            n: 'dcpType',
            col: true,
            en: 'DCPType',
            ti: '.DCPType'
          }]
      }, {
        ln: 'Request',
        ps: [{
            n: 'getCapabilities',
            en: 'GetCapabilities',
            ti: '.OperationType'
          }, {
            n: 'getMap',
            en: 'GetMap',
            ti: '.OperationType'
          }, {
            n: 'getFeatureInfo',
            en: 'GetFeatureInfo',
            ti: '.OperationType'
          }, {
            n: 'extendedOperation',
            col: true,
            en: '_ExtendedOperation',
            ti: '.OperationType'
          }]
      }, {
        ln: 'HTTP',
        ps: [{
            n: 'get',
            en: 'Get',
            ti: '.Get'
          }, {
            n: 'post',
            en: 'Post',
            ti: '.Post'
          }]
      }, {
        ln: 'Layer',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'keywordList',
            en: 'KeywordList',
            ti: '.KeywordList'
          }, {
            n: 'crs',
            col: true,
            en: 'CRS'
          }, {
            n: 'exGeographicBoundingBox',
            en: 'EX_GeographicBoundingBox',
            ti: '.EXGeographicBoundingBox'
          }, {
            n: 'boundingBox',
            col: true,
            en: 'BoundingBox',
            ti: '.BoundingBox'
          }, {
            n: 'dimension',
            col: true,
            en: 'Dimension',
            ti: '.Dimension'
          }, {
            n: 'attribution',
            en: 'Attribution',
            ti: '.Attribution'
          }, {
            n: 'authorityURL',
            col: true,
            en: 'AuthorityURL',
            ti: '.AuthorityURL'
          }, {
            n: 'identifier',
            col: true,
            en: 'Identifier',
            ti: '.Identifier'
          }, {
            n: 'metadataURL',
            col: true,
            en: 'MetadataURL',
            ti: '.MetadataURL'
          }, {
            n: 'dataURL',
            col: true,
            en: 'DataURL',
            ti: '.DataURL'
          }, {
            n: 'featureListURL',
            col: true,
            en: 'FeatureListURL',
            ti: '.FeatureListURL'
          }, {
            n: 'style',
            col: true,
            en: 'Style',
            ti: '.Style'
          }, {
            n: 'minScaleDenominator',
            en: 'MinScaleDenominator',
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: 'MaxScaleDenominator',
            ti: 'Double'
          }, {
            n: 'layer',
            col: true,
            en: 'Layer',
            ti: '.Layer'
          }, {
            n: 'queryable',
            ti: 'Boolean',
            an: {
              lp: 'queryable'
            },
            t: 'a'
          }, {
            n: 'cascaded',
            ti: 'Integer',
            an: {
              lp: 'cascaded'
            },
            t: 'a'
          }, {
            n: 'opaque',
            ti: 'Boolean',
            an: {
              lp: 'opaque'
            },
            t: 'a'
          }, {
            n: 'noSubsets',
            ti: 'Boolean',
            an: {
              lp: 'noSubsets'
            },
            t: 'a'
          }, {
            n: 'fixedWidth',
            ti: 'Integer',
            an: {
              lp: 'fixedWidth'
            },
            t: 'a'
          }, {
            n: 'fixedHeight',
            ti: 'Integer',
            an: {
              lp: 'fixedHeight'
            },
            t: 'a'
          }]
      }, {
        ln: 'KeywordList',
        ps: [{
            n: 'keyword',
            col: true,
            en: 'Keyword',
            ti: '.Keyword'
          }]
      }, {
        ln: 'ContactPersonPrimary',
        ps: [{
            n: 'contactPerson',
            en: 'ContactPerson'
          }, {
            n: 'contactOrganization',
            en: 'ContactOrganization'
          }]
      }, {
        ln: 'Keyword',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'vocabulary',
            an: {
              lp: 'vocabulary'
            },
            t: 'a'
          }]
      }, {
        ln: 'Exception',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format'
          }]
      }, {
        ln: 'Identifier',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'authority',
            an: {
              lp: 'authority'
            },
            t: 'a'
          }]
      }, {
        ln: 'Dimension',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'units',
            an: {
              lp: 'units'
            },
            t: 'a'
          }, {
            n: 'unitSymbol',
            an: {
              lp: 'unitSymbol'
            },
            t: 'a'
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'multipleValues',
            ti: 'Boolean',
            an: {
              lp: 'multipleValues'
            },
            t: 'a'
          }, {
            n: 'nearestValue',
            ti: 'Boolean',
            an: {
              lp: 'nearestValue'
            },
            t: 'a'
          }, {
            n: 'current',
            ti: 'Boolean',
            an: {
              lp: 'current'
            },
            t: 'a'
          }]
      }, {
        ln: 'FeatureListURL',
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'Post',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'ServiceExceptionReport',
        ps: [{
            n: 'serviceException',
            col: true,
            en: {
              lp: 'ServiceException',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: '.ServiceExceptionType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'DCPType',
        ps: [{
            n: 'http',
            en: 'HTTP',
            ti: '.HTTP'
          }]
      }, {
        ln: 'LogoURL',
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'Service',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'keywordList',
            en: 'KeywordList',
            ti: '.KeywordList'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'contactInformation',
            en: 'ContactInformation',
            ti: '.ContactInformation'
          }, {
            n: 'fees',
            en: 'Fees'
          }, {
            n: 'accessConstraints',
            en: 'AccessConstraints'
          }, {
            n: 'layerLimit',
            en: 'LayerLimit',
            ti: 'Integer'
          }, {
            n: 'maxWidth',
            en: 'MaxWidth',
            ti: 'Integer'
          }, {
            n: 'maxHeight',
            en: 'MaxHeight',
            ti: 'Integer'
          }]
      }, {
        ln: 'Get',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'WMSCapabilities',
        ps: [{
            n: 'service',
            en: 'Service',
            ti: '.Service'
          }, {
            n: 'capability',
            en: 'Capability',
            ti: '.Capability'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'Capability',
        ps: [{
            n: 'request',
            en: 'Request',
            ti: '.Request'
          }, {
            n: 'exception',
            en: 'Exception',
            ti: '.Exception'
          }, {
            n: 'extendedCapabilities',
            col: true,
            en: '_ExtendedCapabilities',
            ti: 'AnyType'
          }, {
            n: 'layer',
            en: 'Layer',
            ti: '.Layer'
          }]
      }, {
        ln: 'DataURL',
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'BoundingBox',
        ps: [{
            n: 'crs',
            an: {
              lp: 'CRS'
            },
            t: 'a'
          }, {
            n: 'minx',
            ti: 'Double',
            an: {
              lp: 'minx'
            },
            t: 'a'
          }, {
            n: 'miny',
            ti: 'Double',
            an: {
              lp: 'miny'
            },
            t: 'a'
          }, {
            n: 'maxx',
            ti: 'Double',
            an: {
              lp: 'maxx'
            },
            t: 'a'
          }, {
            n: 'maxy',
            ti: 'Double',
            an: {
              lp: 'maxy'
            },
            t: 'a'
          }, {
            n: 'resx',
            ti: 'Double',
            an: {
              lp: 'resx'
            },
            t: 'a'
          }, {
            n: 'resy',
            ti: 'Double',
            an: {
              lp: 'resy'
            },
            t: 'a'
          }]
      }, {
        ln: 'OnlineResource',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'ContactAddress',
        ps: [{
            n: 'addressType',
            en: 'AddressType'
          }, {
            n: 'address',
            en: 'Address'
          }, {
            n: 'city',
            en: 'City'
          }, {
            n: 'stateOrProvince',
            en: 'StateOrProvince'
          }, {
            n: 'postCode',
            en: 'PostCode'
          }, {
            n: 'country',
            en: 'Country'
          }]
      }, {
        ln: 'AuthorityURL',
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'EXGeographicBoundingBox',
        ps: [{
            n: 'westBoundLongitude',
            ti: 'Double'
          }, {
            n: 'eastBoundLongitude',
            ti: 'Double'
          }, {
            n: 'southBoundLatitude',
            ti: 'Double'
          }, {
            n: 'northBoundLatitude',
            ti: 'Double'
          }]
      }, {
        ln: 'ContactInformation',
        ps: [{
            n: 'contactPersonPrimary',
            en: 'ContactPersonPrimary',
            ti: '.ContactPersonPrimary'
          }, {
            n: 'contactPosition',
            en: 'ContactPosition'
          }, {
            n: 'contactAddress',
            en: 'ContactAddress',
            ti: '.ContactAddress'
          }, {
            n: 'contactVoiceTelephone',
            en: 'ContactVoiceTelephone'
          }, {
            n: 'contactFacsimileTelephone',
            en: 'ContactFacsimileTelephone'
          }, {
            n: 'contactElectronicMailAddress',
            en: 'ContactElectronicMailAddress'
          }]
      }, {
        ln: 'Attribution',
        ps: [{
            n: 'title',
            en: 'Title'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'logoURL',
            en: 'LogoURL',
            ti: '.LogoURL'
          }]
      }, {
        ln: 'Style',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'legendURL',
            col: true,
            en: 'LegendURL',
            ti: '.LegendURL'
          }, {
            n: 'styleSheetURL',
            en: 'StyleSheetURL',
            ti: '.StyleSheetURL'
          }, {
            n: 'styleURL',
            en: 'StyleURL',
            ti: '.StyleURL'
          }]
      }, {
        ln: 'StyleSheetURL',
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'MetadataURL',
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'StyleURL',
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }],
    eis: [{
        en: 'AuthorityURL',
        ti: '.AuthorityURL'
      }, {
        en: 'Capability',
        ti: '.Capability'
      }, {
        en: 'Get',
        ti: '.Get'
      }, {
        en: 'LayerLimit',
        ti: 'Integer'
      }, {
        en: 'Exception',
        ti: '.Exception'
      }, {
        en: 'FeatureListURL',
        ti: '.FeatureListURL'
      }, {
        en: 'Title'
      }, {
        en: {
          lp: 'ServiceExceptionReport',
          ns: 'http:\/\/www.opengis.net\/ogc'
        },
        ti: '.ServiceExceptionReport'
      }, {
        en: 'WMS_Capabilities',
        ti: '.WMSCapabilities'
      }, {
        en: 'MinScaleDenominator',
        ti: 'Double'
      }, {
        en: 'MaxScaleDenominator',
        ti: 'Double'
      }, {
        en: 'ContactVoiceTelephone'
      }, {
        en: 'StateOrProvince'
      }, {
        en: 'Style',
        ti: '.Style'
      }, {
        en: '_ExtendedOperation',
        ti: '.OperationType'
      }, {
        en: 'EX_GeographicBoundingBox',
        ti: '.EXGeographicBoundingBox'
      }, {
        en: 'Layer',
        ti: '.Layer'
      }, {
        en: 'MaxHeight',
        ti: 'Integer'
      }, {
        en: 'Format'
      }, {
        en: 'MetadataURL',
        ti: '.MetadataURL'
      }, {
        en: 'Identifier',
        ti: '.Identifier'
      }, {
        en: 'Keyword',
        ti: '.Keyword'
      }, {
        en: 'Address'
      }, {
        en: 'OnlineResource',
        ti: '.OnlineResource'
      }, {
        en: 'GetFeatureInfo',
        ti: '.OperationType'
      }, {
        en: 'Post',
        ti: '.Post'
      }, {
        en: 'PostCode'
      }, {
        en: 'KeywordList',
        ti: '.KeywordList'
      }, {
        en: 'LogoURL',
        ti: '.LogoURL'
      }, {
        en: 'ContactPerson'
      }, {
        en: 'AccessConstraints'
      }, {
        en: 'Service',
        ti: '.Service'
      }, {
        en: 'CRS'
      }, {
        en: 'BoundingBox',
        ti: '.BoundingBox'
      }, {
        en: 'ContactPosition'
      }, {
        en: 'Abstract'
      }, {
        en: 'ContactInformation',
        ti: '.ContactInformation'
      }, {
        en: 'StyleURL',
        ti: '.StyleURL'
      }, {
        en: 'Name'
      }, {
        en: 'MaxWidth',
        ti: 'Integer'
      }, {
        en: 'ContactFacsimileTelephone'
      }, {
        en: 'Dimension',
        ti: '.Dimension'
      }, {
        en: 'ContactPersonPrimary',
        ti: '.ContactPersonPrimary'
      }, {
        en: 'Attribution',
        ti: '.Attribution'
      }, {
        en: 'GetCapabilities',
        ti: '.OperationType'
      }, {
        en: 'LegendURL',
        ti: '.LegendURL'
      }, {
        en: 'DCPType',
        ti: '.DCPType'
      }, {
        en: 'Fees'
      }, {
        en: 'HTTP',
        ti: '.HTTP'
      }, {
        en: 'GetMap',
        ti: '.OperationType'
      }, {
        en: 'Country'
      }, {
        en: 'ContactAddress',
        ti: '.ContactAddress'
      }, {
        en: 'City'
      }, {
        en: '_ExtendedCapabilities',
        ti: 'AnyType'
      }, {
        en: 'AddressType'
      }, {
        en: 'Request',
        ti: '.Request'
      }, {
        en: 'DataURL',
        ti: '.DataURL'
      }, {
        en: 'ContactOrganization'
      }, {
        en: 'ContactElectronicMailAddress'
      }, {
        en: 'StyleSheetURL',
        ti: '.StyleSheetURL'
      }]
  };
  return {
    WMS_1_3_0: WMS_1_3_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WMS_1_3_0_Module_Factory);
}
else {
  var WMS_1_3_0_Module = WMS_1_3_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WMS_1_3_0 = WMS_1_3_0_Module.WMS_1_3_0;
  }
  else {
    var WMS_1_3_0 = WMS_1_3_0_Module.WMS_1_3_0;
  }
}