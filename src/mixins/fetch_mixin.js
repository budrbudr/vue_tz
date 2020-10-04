export default {
    fetchMixin: async function (settings) {
        let resp = await fetch(`${process.env.VUE_APP_API_URL}/${settings.request}`, {
            method: settings.method || "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": process.env.VUE_APP_CLIENT_ID
            },
            body: settings.body || undefined
        })
            .then(resp => {
                if (resp.status !== 200) {
                    alert('Something wrong')
                } else return resp
            })
        return resp
    }
}
