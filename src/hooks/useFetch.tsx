import { useState, useCallback } from 'react'

import api from '../services/api';
import { getToken } from '../services/auth';

interface useFetchProps {
    route: string;
    isElement?: boolean;
}

export default function useFetch({ route, isElement }: useFetchProps) {
    const token = getToken();

    const [data, setData] = useState<any>(null);
    const [error, setError] = useState(null);
    const [loading, isLoading] = useState(false);

    const fetch = useCallback(async params => {
        let response;
        const headers = { Authorization: `Bearer ${token}` }

        try {
            setError(null);
            isLoading(true);

            response = await api.get(route, { headers, params })
        } catch (error) {
            setError(error.response.message || error.message);
            response = null;
        } finally {
            setData(() => isElement ? response.data[0] : response.data);
            isLoading(false);

            return response
        }

    }, [token, route, isElement])

    return { fetch, data, loading, error }
}