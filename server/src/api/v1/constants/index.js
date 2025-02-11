const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization',
    CLIENT_ID: 'x-client-id',
    REFRESH_TOKEN: 'x-refresh-token'
}

const ROLE_SHOP = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

const NAME_SERVICE_2FA = process.env.NAME_SERVICE_2FA || 'E-commerce'

module.exports = {
    HEADER,
    ROLE_SHOP,
    NAME_SERVICE_2FA
}