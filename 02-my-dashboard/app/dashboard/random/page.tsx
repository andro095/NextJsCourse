import { cacheLife } from "next/cache";

export default async function RandomPage() {
    'use cache';

    cacheLife({
        stale: 5,
        revalidate: 10,
        // expire: 86400
    })

    const random = Math.random();
    const now = Date.now();
    const date = new Date()
    const uuid = crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));

    return (
        <div>
            <h1>Hello Page</h1>
            <p>Random: {random}</p>
            <p>Now: {now}</p>
            <p>Date: {date.toISOString()}</p>
            <p>UUID: {uuid}</p>
            <p>Bytes: {bytes}</p>
        </div>
    );
}