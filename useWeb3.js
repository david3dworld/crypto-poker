import { useEffect, useState, useRef } from 'react'
import Web3 from 'web3'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
//import { useWallet } from "use-wallet";
//import getRpcUrl from '../utils/getRpcUrl'

//const RPC_URL = getRpcUrl()
//const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 })

const useWeb3 = () => {
    const { ethereum } = window.ethereum;
    const refEth = useRef(ethereum)
    const [web3, setWeb3] = useState(new Web3(Web3.givenProvider || 'http://localhost:7545'))

    useEffect(() => {
        if (ethereum !== refEth.current) {
            setWeb3(new Web3(ethereum || 'http://localhost:7545'))
            refEth.current = ethereum
        }
    }, [ethereum])

    return web3
}

export default useWeb3
