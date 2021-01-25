var config = {
    deps:['Magento_Theme/js/slick'],
    map: {
        '*': {
            'qty-counter': 'Magento_Catalog/js/qty-counter'
        }
    },
    paths: {
        slick: 'js/slick',
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};