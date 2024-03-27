export const UpdateSchema = {
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
                id: {
                    type: 'string',
                    example: 'string'
                },
                name: {
                    type: 'string',
                    example: 'string'
                },
                status: {
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
            },
        },
    },
};