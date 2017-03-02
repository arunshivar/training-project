/**
 * Created by sb-c2-02 on 1/3/17.
 */
var config = {
    database: {
        connectionString: "mongodb://localhost:27017/shopping_cart",
        databaseName: "shopping_cart"
    },
    debug: {
        database: {
            connectionString: "mongodb://localhost:27017/shopping_cart-dev",
            databaseName: "shopping_cart-dev"
        }
    }
};

module.exports = config;
