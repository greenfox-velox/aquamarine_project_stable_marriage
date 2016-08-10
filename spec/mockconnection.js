var mockConnectionMoreItems = {
  query: function(sql, cb) {
    cb(null, [{}, {}, {}])
  }
};

var mockConnectionOneItem = {
  query: function(sql, item, cb) {
    cb(null, [{}])
  }
};

var mockConnectionMoreItemsError = {
  query: function(sql, cb) {
    cb('error', [{}, {}, {}])
  }
};

var mockConnectionOneItemError = {
  query: function(sql, item, cb) {
    cb('error', [{}])
  }
};

module.exports = {
  mockConnectionMoreItems: mockConnectionMoreItems,
  mockConnectionOneItem: mockConnectionOneItem,
  mockConnectionMoreItemsError: mockConnectionMoreItemsError,
  mockConnectionOneItemError: mockConnectionOneItemError
};
