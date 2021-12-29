import Web3 from 'web3';
import Ask from '../../contracts/ASK.json';
import BN from 'bn.js'
import { ASK as ASKContract } from '../../generated-abi/typechain/web3/ASK';
import { AbiItem } from "web3-utils";
import ENVS from 'contracts/envs';

const makeContract = (web3: Web3) => {
  return new web3.eth.Contract(Ask.abi as AbiItem[], ENVS.askV1ContractAddress) as ASKContract
}

export const createQuestion = async (web3: Web3, reward: BN, contents: string) => {
  const contract = makeContract(web3);
  const accounts = await web3.eth.getAccounts();
  return contract.methods.createQuestion(reward.toString(), contents).send({
    from: accounts[0]
  })
}

export const getQuestions = async (web3: Web3) => {
  const contract = makeContract(web3);
  return await contract.methods.getQuestionCount().call();
}
