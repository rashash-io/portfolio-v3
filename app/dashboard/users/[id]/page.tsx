import React from 'react'


//params is what populates the [id] url
const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <h1>  dffshowing deets for user # {id}</h1>
    )
}

export default UserDetails 