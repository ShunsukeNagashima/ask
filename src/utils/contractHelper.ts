import Web3 from 'web3';
import Ask from '../../contracts/ASK.json';
import { ASK as ASKContract } from '../../generated-abi/typechain/web3/ASK';
import { AbiItem } from "web3-utils";

const makeContract = (web3: Web3) => {
  console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  return new web3.eth.Contract(Ask.abi as AbiItem[], process.env.NEXT_PUBLIC_CONTRACT_ADDRESS) as ASKContract
}

export const createQuestion = async (web3: Web3, reward: number, contents: string | number[]) => {
  const contract = makeContract(web3);
  const accounts = await web3.eth.getAccounts();
  return contract.methods.createQuestion(reward, contents).send({
    from: accounts[0]
  })
}

export const getQuestionCount = async (web3: Web3) => {
  const contract = makeContract(web3);
  return await contract.methods.getQuestionCount().call();
}
