export const GetMessagesSchema = {
    properties: {
        code: {
            type: 'number',
            example: 0
        },
        status: {
            type: 'string',
            example: 'string'
        },
        result: {
            type: 'object',
            properties: {
                total_pending: {
                    type: 'number',
                    example: 0
                },
                total_sent: {
                    type: 'number',
                    example: 0
                },
                total_error: {
                    type: 'number',
                    example: 0
                },
                pending: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string',
                                example: 'string'
                            },
                            campaign_id: {
                                type: 'number',
                                example: 0
                            },
                            shipping_status: {
                                type: 'number',
                                example: 0
                            },
                            shipping_date: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            message: {
                                type: 'string',
                                example: 'string'
                            },
                            status: {
                                type: 'number',
                                example: 0
                            },
                            user_id: {
                                type: 'number',
                                example: 0
                            },
                            client_id: {
                                type: 'number',
                                example: 0
                            },
                            created_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            updated_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            deleted_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                        }
                    }
                },
                sent: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string',
                                example: 'string'
                            },
                            campaign_id: {
                                type: 'number',
                                example: 0
                            },
                            shipping_status: {
                                type: 'number',
                                example: 0
                            },
                            shipping_date: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            message: {
                                type: 'string',
                                example: 'string'
                            },
                            status: {
                                type: 'number',
                                example: 0
                            },
                            user_id: {
                                type: 'number',
                                example: 0
                            },
                            client_id: {
                                type: 'number',
                                example: 0
                            },
                            created_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            updated_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            deleted_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                        }
                    }
                },
                error: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string',
                                example: 'string'
                            },
                            campaign_id: {
                                type: 'number',
                                example: 0
                            },
                            shipping_status: {
                                type: 'number',
                                example: 0
                            },
                            shipping_date: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            message: {
                                type: 'string',
                                example: 'string'
                            },
                            status: {
                                type: 'number',
                                example: 0
                            },
                            user_id: {
                                type: 'number',
                                example: 0
                            },
                            client_id: {
                                type: 'number',
                                example: 0
                            },
                            created_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            updated_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                            deleted_at: {
                                type: 'string',
                                format: 'date-time',
                                example: '2024-03-26T20:45:37.298Z'
                            },
                        }
                    }
                }
            },
        }
    },
};