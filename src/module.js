console.log('module');
async function start() {
  return await Promise.resolve('HWORLD')
}
start().then(console.log)