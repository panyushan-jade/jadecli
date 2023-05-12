export default function (){
    return process.argv.includes('--debug') || process.argv.includes('-d')
}