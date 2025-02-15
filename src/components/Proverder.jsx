'use client';
import store from '@/lib/ReduxToolkit/store/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }) {
    // const storeRef = useRef(undefined);
    // if (!storeRef.current) {
    //     storeRef.current = store();
    // }

    return <Provider store={store}>{children}</Provider>;
}
