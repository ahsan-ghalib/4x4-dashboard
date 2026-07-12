import requests from "./httpService";

const ShipmentServices = {
  getByOrder: async (orderId, body, headers) => {
    return requests.get(`/shipments/order/${orderId}`, body, headers);
  },

  retryOrderShipments: async (orderId, body = {}, headers) => {
    return requests.post(`/shipments/order/${orderId}/retry`, body, headers);
  },

  reprintLabel: async (shipmentId, body = {}, headers) => {
    return requests.post(`/shipments/${shipmentId}/reprint-label`, body, headers);
  },

  refreshTracking: async (shipmentId, body = {}, headers) => {
    return requests.post(`/shipments/${shipmentId}/refresh-tracking`, body, headers);
  },
};

export default ShipmentServices;
