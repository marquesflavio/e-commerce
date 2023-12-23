"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    };

    return (
        <>
            <StoreModal />
        </>
    )
};


//Para evitar erros de hydration, que é quando algo está acontecendo no lado do cliente e não está acontecendo do lado do servidor também.