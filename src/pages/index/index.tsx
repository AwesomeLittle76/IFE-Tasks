import React, {useState} from 'react';

import Popover from "@/components/popover";

const Index = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    return (
        <div className="">
            <Popover visible={isVisible}
                     closable
                     title="这是一个浮出层"
                     width={240}
                     height={180}>
                <div>
                    <p>这是一个浮出层</p>
                    <div className="flex justify-end items-center mt-16">
                        <button type="button" onClick={() => setIsVisible(false)}
                                className="bg-sky-300 text-white px-8 py-1 rounded mr-4"
                        >
                            确定
                        </button>

                        <button type="button" onClick={() => setIsVisible(false)}
                                className="text-sky-300 border border-sky-300 px-8 py-1 rounded mr-4"
                        >
                            取消
                        </button>
                    </div>
                </div>
            </Popover>
            <button type="button" className="px-10 py-2 bg-blue-300 text-white rounded"
                    onClick={() => setIsVisible(!isVisible)}>
                浮出层
            </button>

        </div>
    )
}

export default Index
