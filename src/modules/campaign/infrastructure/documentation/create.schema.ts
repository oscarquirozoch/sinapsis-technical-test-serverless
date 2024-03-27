export const CreateSchema = {
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
                user_id: {
                    type: 'number',
                    example: 0
                },
                name: {
                    type: 'string',
                    example: 'string'
                },
                schedule_time: {
                    type: 'string',
                    format: 'date-time',
                    example: '2024-03-26T20:45:37.298Z'
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