var SPS_2_0_Module_Factory = function () {
  var SPS_2_0 = {
    n: 'SPS_2_0',
    dens: 'http:\/\/www.opengis.net\/sps\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    tis: [{
        ln: 'ParameterDataType',
        ps: [{
            n: 'encoding',
            ti: '.ParameterDataType.Encoding'
          }, {
            n: 'values',
            ti: 'AnyType'
          }]
      }, {
        ln: 'ReservationReportType',
        bti: '.StatusReportType',
        ps: [{
            n: 'reservationExpiration',
            ti: 'Calendar'
          }]
      }, {
        ln: 'GetCapabilitiesPropertyType',
        ps: [{
            n: 'getCapabilities',
            en: 'GetCapabilities',
            ti: '.GetCapabilitiesType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ReserveResponsePropertyType',
        ps: [{
            n: 'reserveResponse',
            en: 'ReserveResponse',
            ti: '.ReserveResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'StatusReportPropertyType',
        ps: [{
            n: 'statusReport',
            mx: false,
            dom: false,
            typed: false,
            en: 'StatusReport',
            ti: '.StatusReportType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DataAvailableType.DataReference',
        ps: [{
            n: 'referenceGroup',
            en: {
              lp: 'ReferenceGroup',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.ReferenceGroupType'
          }]
      }, {
        ln: 'GetStatusType',
        bti: 'SWES_2_0.ExtensibleRequestType',
        ps: [{
            n: 'task'
          }, {
            n: 'since',
            ti: 'Calendar'
          }]
      }, {
        ln: 'DescribeTaskingResponseType',
        bti: 'SWES_2_0.ExtensibleResponseType',
        ps: [{
            n: 'taskingParameters',
            ti: '.DescribeTaskingResponseType.TaskingParameters'
          }]
      }, {
        ln: 'AvailableOrNotPropertyType',
        ps: [{
            n: 'available',
            ti: '.AvailableOrNotPropertyType.Available'
          }, {
            n: 'unavailable',
            ti: '.AvailableOrNotPropertyType.Unavailable'
          }, {
            n: 'unionSemantics',
            an: {
              lp: 'unionSemantics'
            },
            t: 'a'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetStatusResponsePropertyType',
        ps: [{
            n: 'getStatusResponse',
            en: 'GetStatusResponse',
            ti: '.GetStatusResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetStatusResponseType',
        bti: 'SWES_2_0.ExtensibleResponseType',
        ps: [{
            n: 'status',
            col: true,
            ti: '.GetStatusResponseType.Status'
          }]
      }, {
        ln: 'SubmitPropertyType',
        ps: [{
            n: 'submit',
            en: 'Submit',
            ti: '.SubmitType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TaskingRequestPropertyType',
        ps: [{
            n: 'taskingRequest',
            mx: false,
            dom: false,
            typed: false,
            en: 'TaskingRequest',
            ti: '.TaskingRequestType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetFeasibilityResponsePropertyType',
        ps: [{
            n: 'getFeasibilityResponse',
            en: 'GetFeasibilityResponse',
            ti: '.GetFeasibilityResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TaskingRequestType',
        bti: 'SWES_2_0.ExtensibleRequestType',
        ps: [{
            n: 'procedure'
          }, {
            n: 'taskingParameters',
            ti: '.TaskingRequestType.TaskingParameters'
          }, {
            n: 'latestResponseTime',
            ti: 'Calendar'
          }]
      }, {
        ln: 'CapabilitiesType.Notifications',
        ps: [{
            n: 'notificationProducerMetadata',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'NotificationProducerMetadata',
              ns: 'http:\/\/www.opengis.net\/swes\/2.0'
            },
            ti: 'SWES_2_0.NotificationProducerMetadataType',
            t: 'er'
          }]
      }, {
        ln: 'DescribeResultAccessPropertyType',
        ps: [{
            n: 'describeResultAccess',
            en: 'DescribeResultAccess',
            ti: '.DescribeResultAccessType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TaskingResponseType',
        bti: 'SWES_2_0.ExtensibleResponseType',
        ps: [{
            n: 'latestResponseTime',
            ti: 'Calendar'
          }, {
            n: 'result',
            ti: '.TaskingResponseType.Result'
          }]
      }, {
        ln: 'CancelResponsePropertyType',
        ps: [{
            n: 'cancelResponse',
            en: 'CancelResponse',
            ti: '.CancelResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SPSMetadataType',
        ps: [{
            n: 'dataAccessType'
          }]
      }, {
        ln: 'TaskOrProcessPropertyType',
        ps: [{
            n: 'task'
          }, {
            n: 'procedure'
          }, {
            n: 'unionSemantics',
            an: {
              lp: 'unionSemantics'
            },
            t: 'a'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'UpdateResponseType',
        bti: '.TaskingResponseType',
        ps: [{
            n: 'targetTask'
          }]
      }, {
        ln: 'GetStatusResponseType.Status',
        ps: [{
            n: 'statusReport',
            mx: false,
            dom: false,
            typed: false,
            en: 'StatusReport',
            ti: '.StatusReportType',
            t: 'er'
          }]
      }, {
        ln: 'DescribeResultAccessResponseType',
        bti: 'SWES_2_0.ExtensibleResponseType',
        ps: [{
            n: 'availability',
            ti: '.DescribeResultAccessResponseType.Availability'
          }]
      }, {
        ln: 'DescribeTaskingType',
        bti: 'SWES_2_0.ExtensibleRequestType',
        ps: [{
            n: 'procedure'
          }]
      }, {
        ln: 'SensorOfferingType',
        bti: 'SWES_2_0.AbstractOfferingType',
        ps: [{
            n: 'observableArea',
            ti: '.SensorOfferingType.ObservableArea'
          }]
      }, {
        ln: 'SubmitType',
        bti: '.TaskingRequestType'
      }, {
        ln: 'SPSContentsPropertyType',
        ps: [{
            n: 'spsContents',
            en: 'SPSContents',
            ti: '.SPSContentsType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetTaskResponseType.Task',
        ps: [{
            n: 'task',
            en: 'Task',
            ti: '.TaskType'
          }]
      }, {
        ln: 'StatusReportType.Alternative',
        ps: [{
            n: 'alternative',
            en: 'Alternative',
            ti: '.AlternativeType'
          }]
      }, {
        ln: 'PointOrPolygonPropertyType.ByPolygon',
        ps: [{
            n: 'polygon',
            en: {
              lp: 'Polygon',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.PolygonType'
          }]
      }, {
        ln: 'AlternativeType',
        bti: 'SWES_2_0.AbstractSWESType',
        ps: [{
            n: 'alternativeDescription',
            col: true,
            en: 'description',
            ti: 'OWS_1_1_0.LanguageStringType'
          }, {
            n: 'taskingParameters',
            ti: '.AlternativeType.TaskingParameters'
          }]
      }, {
        ln: 'TaskingResponseType.Result',
        ps: [{
            n: 'statusReport',
            mx: false,
            dom: false,
            typed: false,
            en: 'StatusReport',
            ti: '.StatusReportType',
            t: 'er'
          }]
      }, {
        ln: 'DescribeResultAccessResponsePropertyType',
        ps: [{
            n: 'describeResultAccessResponse',
            en: 'DescribeResultAccessResponse',
            ti: '.DescribeResultAccessResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetTaskType',
        bti: 'SWES_2_0.ExtensibleRequestType',
        ps: [{
            n: 'task',
            col: true
          }]
      }, {
        ln: 'ConfirmResponseType.Result',
        ps: [{
            n: 'statusReport',
            mx: false,
            dom: false,
            typed: false,
            en: 'StatusReport',
            ti: '.StatusReportType',
            t: 'er'
          }]
      }, {
        ln: 'ReservationReportPropertyType',
        ps: [{
            n: 'reservationReport',
            en: 'ReservationReport',
            ti: '.ReservationReportType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'UpdateResponsePropertyType',
        ps: [{
            n: 'updateResponse',
            en: 'UpdateResponse',
            ti: '.UpdateResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DescribeResultAccessResponseType.Availability',
        ps: [{
            n: 'available',
            ti: '.AvailableOrNotPropertyType.Available'
          }, {
            n: 'unavailable',
            ti: '.AvailableOrNotPropertyType.Unavailable'
          }]
      }, {
        ln: 'PointOrPolygonPropertyType',
        ps: [{
            n: 'byPoint',
            ti: '.PointOrPolygonPropertyType.ByPoint'
          }, {
            n: 'byPolygon',
            ti: '.PointOrPolygonPropertyType.ByPolygon'
          }, {
            n: 'unionSemantics',
            an: {
              lp: 'unionSemantics'
            },
            t: 'a'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AlternativeType.TaskingParameters',
        ps: [{
            n: 'parameterData',
            en: 'ParameterData',
            ti: '.ParameterDataType'
          }]
      }, {
        ln: 'TaskingResponsePropertyType',
        ps: [{
            n: 'taskingResponse',
            mx: false,
            dom: false,
            typed: false,
            en: 'TaskingResponse',
            ti: '.TaskingResponseType',
            t: 'er'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'UpdateType',
        bti: '.TaskingRequestType',
        ps: [{
            n: 'targetTask'
          }]
      }, {
        ln: 'CapabilitiesType',
        bti: 'OWS_1_1_0.CapabilitiesBaseType',
        ps: [{
            n: 'notifications',
            ti: '.CapabilitiesType.Notifications'
          }, {
            n: 'contents',
            ti: '.CapabilitiesType.Contents'
          }, {
            n: 'extension',
            col: true,
            ti: 'AnyType'
          }]
      }, {
        ln: 'DataAvailablePropertyType',
        ps: [{
            n: 'dataAvailable',
            en: 'DataAvailable',
            ti: '.DataAvailableType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SubmitResponsePropertyType',
        ps: [{
            n: 'submitResponse',
            en: 'SubmitResponse',
            ti: '.SubmitResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SensorOfferingPropertyType',
        ps: [{
            n: 'sensorOffering',
            en: 'SensorOffering',
            ti: '.SensorOfferingType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CancelResponseType.Result',
        ps: [{
            n: 'statusReport',
            mx: false,
            dom: false,
            typed: false,
            en: 'StatusReport',
            ti: '.StatusReportType',
            t: 'er'
          }]
      }, {
        ln: 'ConfirmResponsePropertyType',
        ps: [{
            n: 'confirmResponse',
            en: 'ConfirmResponse',
            ti: '.ConfirmResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetStatusPropertyType',
        ps: [{
            n: 'getStatus',
            en: 'GetStatus',
            ti: '.GetStatusType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ParameterDataType.Encoding',
        ps: [{
            n: 'abstractEncoding',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'AbstractEncoding',
              ns: 'http:\/\/www.opengis.net\/swe\/2.0'
            },
            ti: 'SWE_2_0.AbstractEncodingType',
            t: 'er'
          }]
      }, {
        ln: 'SPSContentsType',
        bti: 'SWES_2_0.AbstractContentsType',
        ps: [{
            n: 'minStatusTime'
          }, {
            n: 'supportedEncoding',
            col: true
          }]
      }, {
        ln: 'UpdatePropertyType',
        ps: [{
            n: 'update',
            en: 'Update',
            ti: '.UpdateType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CapabilitiesPropertyType',
        ps: [{
            n: 'capabilities',
            en: 'Capabilities',
            ti: '.CapabilitiesType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DataNotAvailablePropertyType',
        ps: [{
            n: 'dataNotAvailable',
            en: 'DataNotAvailable',
            ti: '.DataNotAvailableType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AvailableOrNotPropertyType.Unavailable',
        ps: [{
            n: 'dataNotAvailable',
            en: 'DataNotAvailable',
            ti: '.DataNotAvailableType'
          }]
      }, {
        ln: 'CancelResponseType',
        bti: 'SWES_2_0.ExtensibleResponseType',
        ps: [{
            n: 'result',
            ti: '.CancelResponseType.Result'
          }]
      }, {
        ln: 'SPSMetadataPropertyType',
        ps: [{
            n: 'spsMetadata',
            en: 'SPSMetadata',
            ti: '.SPSMetadataType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ReservePropertyType',
        ps: [{
            n: 'reserve',
            en: 'Reserve',
            ti: '.ReserveType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetFeasibilityPropertyType',
        ps: [{
            n: 'getFeasibility',
            en: 'GetFeasibility',
            ti: '.GetFeasibilityType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ConfirmPropertyType',
        ps: [{
            n: 'confirm',
            en: 'Confirm',
            ti: '.ConfirmType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DataAvailableType',
        ps: [{
            n: 'dataReference',
            col: true,
            ti: '.DataAvailableType.DataReference'
          }]
      }, {
        ln: 'GetFeasibilityResponseType',
        bti: '.TaskingResponseType'
      }, {
        ln: 'TaskPropertyType',
        ps: [{
            n: 'task',
            en: 'Task',
            ti: '.TaskType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'ConfirmType',
        bti: 'SWES_2_0.ExtensibleRequestType',
        ps: [{
            n: 'task'
          }]
      }, {
        ln: 'DescribeResultAccessType.Target',
        ps: [{
            n: 'task'
          }, {
            n: 'procedure'
          }]
      }, {
        ln: 'ConfirmResponseType',
        bti: 'SWES_2_0.ExtensibleResponseType',
        ps: [{
            n: 'result',
            ti: '.ConfirmResponseType.Result'
          }]
      }, {
        ln: 'GetTaskPropertyType',
        ps: [{
            n: 'getTask',
            en: 'GetTask',
            ti: '.GetTaskType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'CapabilitiesType.Contents',
        ps: [{
            n: 'spsContents',
            en: 'SPSContents',
            ti: '.SPSContentsType'
          }]
      }, {
        ln: 'TaskType',
        bti: 'SWES_2_0.AbstractSWESType',
        ps: [{
            n: 'status',
            col: true,
            ti: '.StatusReportPropertyType'
          }]
      }, {
        ln: 'CancelType',
        bti: 'SWES_2_0.ExtensibleRequestType',
        ps: [{
            n: 'task'
          }]
      }, {
        ln: 'DescribeTaskingResponsePropertyType',
        ps: [{
            n: 'describeTaskingResponse',
            en: 'DescribeTaskingResponse',
            ti: '.DescribeTaskingResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GetTaskResponseType',
        bti: 'SWES_2_0.ExtensibleResponseType',
        ps: [{
            n: 'task',
            col: true,
            ti: '.GetTaskResponseType.Task'
          }]
      }, {
        ln: 'DescribeTaskingResponseType.TaskingParameters',
        ps: [{
            n: 'abstractDataComponent',
            mx: false,
            dom: false,
            typed: false,
            en: {
              lp: 'AbstractDataComponent',
              ns: 'http:\/\/www.opengis.net\/swe\/2.0'
            },
            ti: 'SWE_2_0.AbstractDataComponentType',
            t: 'er'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'AlternativePropertyType',
        ps: [{
            n: 'alternative',
            en: 'Alternative',
            ti: '.AlternativeType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DescribeResultAccessType',
        bti: 'SWES_2_0.ExtensibleRequestType',
        ps: [{
            n: 'target',
            ti: '.DescribeResultAccessType.Target'
          }]
      }, {
        ln: 'GetFeasibilityType',
        bti: '.TaskingRequestType'
      }, {
        ln: 'TaskingRequestType.TaskingParameters',
        ps: [{
            n: 'parameterData',
            en: 'ParameterData',
            ti: '.ParameterDataType'
          }]
      }, {
        ln: 'AvailableOrNotPropertyType.Available',
        ps: [{
            n: 'dataAvailable',
            en: 'DataAvailable',
            ti: '.DataAvailableType'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        bti: 'OWS_1_1_0.GetCapabilitiesType',
        ps: [{
            n: 'extension',
            col: true,
            ti: 'AnyType'
          }, {
            n: 'service',
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'ReserveResponseType',
        bti: '.TaskingResponseType'
      }, {
        ln: 'ParameterDataPropertyType',
        ps: [{
            n: 'parameterData',
            en: 'ParameterData',
            ti: '.ParameterDataType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'StatusReportType',
        bti: 'SWES_2_0.AbstractSWESType',
        ps: [{
            n: 'task'
          }, {
            n: 'estimatedToC',
            ti: 'Calendar'
          }, {
            n: 'event'
          }, {
            n: 'percentCompletion',
            ti: 'Double'
          }, {
            n: 'procedure'
          }, {
            n: 'requestStatus'
          }, {
            n: 'statusMessage',
            col: true,
            ti: 'OWS_1_1_0.LanguageStringType'
          }, {
            n: 'taskStatus'
          }, {
            n: 'updateTime',
            ti: 'Calendar'
          }, {
            n: 'alternative',
            col: true,
            ti: '.StatusReportType.Alternative'
          }, {
            n: 'taskingParameters',
            ti: '.ParameterDataPropertyType'
          }]
      }, {
        ln: 'PointOrPolygonPropertyType.ByPoint',
        ps: [{
            n: 'point',
            en: {
              lp: 'Point',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.PointType'
          }]
      }, {
        ln: 'GetTaskResponsePropertyType',
        ps: [{
            n: 'getTaskResponse',
            en: 'GetTaskResponse',
            ti: '.GetTaskResponseType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'SensorOfferingType.ObservableArea',
        ps: [{
            n: 'byPoint',
            ti: '.PointOrPolygonPropertyType.ByPoint'
          }, {
            n: 'byPolygon',
            ti: '.PointOrPolygonPropertyType.ByPolygon'
          }]
      }, {
        ln: 'SubmitResponseType',
        bti: '.TaskingResponseType'
      }, {
        ln: 'CancelPropertyType',
        ps: [{
            n: 'cancel',
            en: 'Cancel',
            ti: '.CancelType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'DataNotAvailableType',
        ps: [{
            n: 'unavailableCode'
          }, {
            n: 'message',
            col: true,
            ti: 'OWS_1_1_0.LanguageStringType'
          }]
      }, {
        ln: 'ReserveType',
        bti: '.TaskingRequestType',
        ps: [{
            n: 'reservationExpiration',
            ti: 'Calendar'
          }]
      }, {
        ln: 'DescribeTaskingPropertyType',
        ps: [{
            n: 'describeTasking',
            en: 'DescribeTasking',
            ti: '.DescribeTaskingType'
          }, {
            n: 'nilReason',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        t: 'enum',
        ln: 'TaskOrProcessUnionSemantics',
        vs: ['task', 'procedure']
      }, {
        t: 'enum',
        ln: 'UnavailableCodeEnumerationType',
        vs: ['DataNotAvailable', 'DataServiceUnavailable']
      }, {
        t: 'enum',
        ln: 'AvailableOrNotUnionSemantics',
        vs: ['available', 'unavailable']
      }, {
        t: 'enum',
        ln: 'PointOrPolygonUnionSemantics',
        vs: ['byPoint', 'byPolygon']
      }, {
        t: 'enum',
        ln: 'TaskStatusCodeEnumerationType',
        vs: ['Cancelled', 'Completed', 'Expired', 'Failed', 'InExecution', 'Reserved']
      }, {
        t: 'enum',
        ln: 'TaskingRequestStatusCodeEnumerationType',
        vs: ['Accepted', 'Pending', 'Rejected']
      }, {
        t: 'enum',
        ln: 'EventCodeEnumerationType',
        vs: ['DataPublished', 'ReservationExpired', 'TaskCancelled', 'TaskCompleted', 'TaskConfirmed', 'TaskFailed', 'TaskingRequestExpired', 'TaskReserved', 'TaskSubmitted', 'TaskUpdated']
      }],
    eis: [{
        en: 'Capabilities',
        ti: '.CapabilitiesType'
      }, {
        en: 'Update',
        ti: '.UpdateType',
        sh: 'TaskingRequest'
      }, {
        en: 'Submit',
        ti: '.SubmitType',
        sh: 'TaskingRequest'
      }, {
        en: 'DescribeResultAccessResponse',
        ti: '.DescribeResultAccessResponseType',
        sh: {
          lp: 'ExtensibleResponse',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'GetFeasibilityResponse',
        ti: '.GetFeasibilityResponseType',
        sh: 'TaskingResponse'
      }, {
        en: 'GetFeasibility',
        ti: '.GetFeasibilityType',
        sh: 'TaskingRequest'
      }, {
        en: 'SPSContents',
        ti: '.SPSContentsType',
        sh: {
          lp: 'AbstractContents',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'StatusReport',
        ti: '.StatusReportType',
        sh: {
          lp: 'AbstractSWES',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'DescribeTasking',
        ti: '.DescribeTaskingType',
        sh: {
          lp: 'ExtensibleRequest',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'SubmitResponse',
        ti: '.SubmitResponseType',
        sh: 'TaskingResponse'
      }, {
        en: 'CancelResponse',
        ti: '.CancelResponseType',
        sh: {
          lp: 'ExtensibleResponse',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'SensorOffering',
        ti: '.SensorOfferingType',
        sh: {
          lp: 'AbstractOffering',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'ReserveResponse',
        ti: '.ReserveResponseType',
        sh: 'TaskingResponse'
      }, {
        en: 'GetTask',
        ti: '.GetTaskType',
        sh: {
          lp: 'ExtensibleRequest',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'Alternative',
        ti: '.AlternativeType',
        sh: {
          lp: 'AbstractSWES',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'SPSMetadata',
        ti: '.SPSMetadataType',
        sh: {
          lp: 'AbstractMetaData',
          ns: 'http:\/\/www.opengis.net\/ows\/1.1'
        }
      }, {
        en: 'GetTaskResponse',
        ti: '.GetTaskResponseType',
        sh: {
          lp: 'ExtensibleResponse',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'Reserve',
        ti: '.ReserveType',
        sh: 'TaskingRequest'
      }, {
        en: 'ParameterData',
        ti: '.ParameterDataType'
      }, {
        en: 'DataAvailable',
        ti: '.DataAvailableType'
      }, {
        en: 'DescribeTaskingResponse',
        ti: '.DescribeTaskingResponseType',
        sh: {
          lp: 'ExtensibleResponse',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'ReservationReport',
        ti: '.ReservationReportType',
        sh: 'StatusReport'
      }, {
        en: 'GetStatusResponse',
        ti: '.GetStatusResponseType',
        sh: {
          lp: 'ExtensibleResponse',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'UpdateResponse',
        ti: '.UpdateResponseType',
        sh: 'TaskingResponse'
      }, {
        en: 'Task',
        ti: '.TaskType',
        sh: {
          lp: 'AbstractSWES',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'ConfirmResponse',
        ti: '.ConfirmResponseType',
        sh: {
          lp: 'ExtensibleResponse',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'Cancel',
        ti: '.CancelType',
        sh: {
          lp: 'ExtensibleRequest',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType',
        sh: {
          lp: 'GetCapabilities',
          ns: 'http:\/\/www.opengis.net\/ows\/1.1'
        }
      }, {
        en: 'GetStatus',
        ti: '.GetStatusType',
        sh: {
          lp: 'ExtensibleRequest',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'Confirm',
        ti: '.ConfirmType',
        sh: {
          lp: 'ExtensibleRequest',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'TaskingResponse',
        ti: '.TaskingResponseType',
        sh: {
          lp: 'ExtensibleResponse',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'DataNotAvailable',
        ti: '.DataNotAvailableType'
      }, {
        en: 'TaskingRequest',
        ti: '.TaskingRequestType',
        sh: {
          lp: 'ExtensibleRequest',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }, {
        en: 'DescribeResultAccess',
        ti: '.DescribeResultAccessType',
        sh: {
          lp: 'ExtensibleRequest',
          ns: 'http:\/\/www.opengis.net\/swes\/2.0'
        }
      }]
  };
  return {
    SPS_2_0: SPS_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SPS_2_0_Module_Factory);
}
else {
  var SPS_2_0_Module = SPS_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SPS_2_0 = SPS_2_0_Module.SPS_2_0;
  }
  else {
    var SPS_2_0 = SPS_2_0_Module.SPS_2_0;
  }
}