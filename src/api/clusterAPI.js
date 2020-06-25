export async function getClusterState () {
    let result = {
        cluster: {
            broker: 1,
            zookeeper:1
        }
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result)
        }, 2000);
    });
}