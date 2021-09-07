export const getUsers = () => {
    return fetch("https://randomuser.me/api/?exc=login")
        .then((response) => {
            return response.json()

        })
        .then(parsedResponse => {
            console.log(parsedResponse)
            return parsedResponse
        }


        )


}

