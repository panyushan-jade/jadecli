module.exports = function (){
    return process.argv.includes('--debug') || process.argv.includes('-d')
}