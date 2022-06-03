import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IRoyaltyInterface extends utils.Interface {
    functions: {
        "getDefaultRoyaltyInfo()": FunctionFragment;
        "getRoyaltyInfoForToken(uint256)": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "setDefaultRoyaltyInfo(address,uint256)": FunctionFragment;
        "setRoyaltyInfoForToken(uint256,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getDefaultRoyaltyInfo" | "getRoyaltyInfoForToken" | "royaltyInfo" | "setDefaultRoyaltyInfo" | "setRoyaltyInfoForToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "getDefaultRoyaltyInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoyaltyInfoForToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDefaultRoyaltyInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRoyaltyInfoForToken", values: [BigNumberish, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyInfoForToken", data: BytesLike): Result;
    events: {
        "DefaultRoyalty(address,uint256)": EventFragment;
        "RoyaltyForToken(uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyForToken"): EventFragment;
}
export interface DefaultRoyaltyEventObject {
    newRoyaltyRecipient: string;
    newRoyaltyBps: BigNumber;
}
export declare type DefaultRoyaltyEvent = TypedEvent<[
    string,
    BigNumber
], DefaultRoyaltyEventObject>;
export declare type DefaultRoyaltyEventFilter = TypedEventFilter<DefaultRoyaltyEvent>;
export interface RoyaltyForTokenEventObject {
    tokenId: BigNumber;
    royaltyRecipient: string;
    royaltyBps: BigNumber;
}
export declare type RoyaltyForTokenEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], RoyaltyForTokenEventObject>;
export declare type RoyaltyForTokenEventFilter = TypedEventFilter<RoyaltyForTokenEvent>;
export interface IRoyalty extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRoyaltyInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoyaltyInfoForToken(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyInfoForToken(tokenId: BigNumberish, recipient: string, bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getRoyaltyInfoForToken(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
    royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        receiver: string;
        royaltyAmount: BigNumber;
    }>;
    setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyInfoForToken(tokenId: BigNumberish, recipient: string, bps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoyaltyInfoForToken(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRoyaltyInfoForToken(tokenId: BigNumberish, recipient: string, bps: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DefaultRoyalty(address,uint256)"(newRoyaltyRecipient?: null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        DefaultRoyalty(newRoyaltyRecipient?: null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        "RoyaltyForToken(uint256,address,uint256)"(tokenId?: BigNumberish | null, royaltyRecipient?: null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        RoyaltyForToken(tokenId?: BigNumberish | null, royaltyRecipient?: null, royaltyBps?: null): RoyaltyForTokenEventFilter;
    };
    estimateGas: {
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyaltyInfoForToken(tokenId: BigNumberish, recipient: string, bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltyInfoForToken(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyInfoForToken(tokenId: BigNumberish, recipient: string, bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}