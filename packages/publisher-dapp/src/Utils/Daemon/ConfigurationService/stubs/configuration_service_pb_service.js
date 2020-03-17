// package: configuration_service
// file: configuration_service.proto
/* eslint-disable */

var configuration_service_pb = require("./configuration_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConfigurationService = (function () {
  function ConfigurationService() {}
  ConfigurationService.serviceName = "configuration_service.ConfigurationService";
  return ConfigurationService;
}());

ConfigurationService.GetConfiguration = {
  methodName: "GetConfiguration",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: configuration_service_pb.EmptyRequest,
  responseType: configuration_service_pb.ConfigurationResponse
};

ConfigurationService.UpdateConfiguration = {
  methodName: "UpdateConfiguration",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: configuration_service_pb.UpdateRequest,
  responseType: configuration_service_pb.ConfigurationResponse
};

ConfigurationService.StopProcessingRequests = {
  methodName: "StopProcessingRequests",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: configuration_service_pb.EmptyRequest,
  responseType: configuration_service_pb.StatusResponse
};

ConfigurationService.StartProcessingRequests = {
  methodName: "StartProcessingRequests",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: configuration_service_pb.EmptyRequest,
  responseType: configuration_service_pb.StatusResponse
};

ConfigurationService.IsDaemonProcessingRequests = {
  methodName: "IsDaemonProcessingRequests",
  service: ConfigurationService,
  requestStream: false,
  responseStream: false,
  requestType: configuration_service_pb.EmptyRequest,
  responseType: configuration_service_pb.StatusResponse
};

exports.ConfigurationService = ConfigurationService;

function ConfigurationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConfigurationServiceClient.prototype.getConfiguration = function getConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.GetConfiguration, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigurationServiceClient.prototype.updateConfiguration = function updateConfiguration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.UpdateConfiguration, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigurationServiceClient.prototype.stopProcessingRequests = function stopProcessingRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.StopProcessingRequests, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigurationServiceClient.prototype.startProcessingRequests = function startProcessingRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.StartProcessingRequests, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ConfigurationServiceClient.prototype.isDaemonProcessingRequests = function isDaemonProcessingRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConfigurationService.IsDaemonProcessingRequests, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ConfigurationServiceClient = ConfigurationServiceClient;

