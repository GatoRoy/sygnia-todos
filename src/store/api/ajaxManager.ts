const createAjaxManager = () => {
    const ajaxRequest = async (url: string, options?: RequestInit) => {
        const response = await fetch(url, options);
        return await response.json();
    };

    return {
        get: async (url: string, options?: RequestInit) => {
            return await ajaxRequest(url, {
                ...options,
                method: 'GET',
            });
        },

        post: async (url: string, data: any, options?: RequestInit) => {
            return await ajaxRequest(url, {
                ...options,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...options?.headers,
                },
                body: JSON.stringify(data),
            });
        },

        put: async (url: string, data: any, options?: RequestInit) => {
            return await ajaxRequest(url, {
                ...options,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    ...options?.headers,
                },
                body: JSON.stringify(data),
            });
        },
    };
};

const ajaxManager = createAjaxManager();
export default ajaxManager;
