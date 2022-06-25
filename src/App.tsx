import React, {useEffect, useState} from 'react';
import './App.css';

type StudentType = {
    name: string
    ID: number
    score: string
    rank: number
}

function App() {
    const [lineClass, setLineClass] = useState<boolean>(true)
    const [studentsInfo, setStudentsInfo] = useState<string[]>([])
    const [failList, setFailList] = useState<string[]>([])

    const students = [
        {name: "Susan", ID: 1, score: "90", rank: 6},
        {name: "Jackson", ID: 2, score: "88", rank: 7},
        {name: "Bob", ID: 3, score: "45", rank: 18},
        {name: "Jennie", ID: 3, score: "99", rank: 1},
        {name: "Amy", ID: 3, score: "39", rank: 21},
        {name: "Lisa", ID: 3, score: "78", rank: 8},
    ];

    const formatStudentsInfo = (info: StudentType[]) => info.map((s: StudentType) => {
        return `${s.name}:学号${s.ID}总分${s.score}排名第${s.rank}`
    })

    useEffect(() => {
        console.log(merge([4, 6, 21])([1, 5, 7]))
    }, [])

    const merge = (item: number[]) => {
        function mergeWith(element: number[]): number[] {
            const length1 = item.length
            if (length1 === 0) return element

            const length2 = element.length
            if (length2 === 0) return item

            let res: number[] = []
            let x = 0, y = 0
            while (x < length1 && y < length2) {
                if (item[x] <= element[y]) res.push(item[x++])
                else res.push(element[y++])
            }
            while (x < length1) res.push(item[x++])
            while (y < length2) res.push(element[y++])
            return res
        }

        return mergeWith
    }

    const [counter, setCounter] = useState<number>(0)


    return (
        <div className="App">
            <div className={'mt-10'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <p>标题</p>
                    <div className={`bg-indigo-500 ${lineClass ? "line" : "line-none"}`}/>
                </div>
                <button className={'mt-12 bg-green-400 text-white px-14 py-2 rounded'}
                        onClick={() => setLineClass(!lineClass)}>点击
                </button>
            </div>
            <div className={'mt-10 flex flex-col justify-center items-center'}>
                <table>
                    <thead className={'border'}>
                    <tr>
                        <td className={'border w-8'}>name</td>
                        <td className={'border w-8'}>id</td>
                        <td className={'border w-8'}>score</td>
                        <td className={'border w-8'}>rank</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((s: StudentType) => {
                            return <tr key={s.rank}>
                                <td className={'border w-8'}>{s.name}</td>
                                <td className={'border w-8'}>{s.ID}</td>
                                <td className={'border w-8'}>{s.score}</td>
                                <td className={'border w-8'}>{s.rank}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                <button className={'mt-8 bg-blue-400 text-white px-10 py-2 rounded'}
                        onClick={() => {
                            setStudentsInfo(formatStudentsInfo(students))
                        }}>
                    点击整理学生信息
                </button>
                <p className={'px-10 py-2'}>{studentsInfo.join(', ')}</p>
                <button className={'mt-8 bg-blue-400 text-white px-10 py-2 rounded'}
                        onClick={() => {
                            const failStudents = students.filter((s: StudentType) => parseInt(s.score) < 60)
                            setFailList(formatStudentsInfo(failStudents))
                        }}>
                    点击筛选成绩不及格的学生
                </button>
                <p className={'px-10 py-2'}>{failList.join(', ')}</p>
            </div>

            <button className={'mt-8 bg-blue-400 text-white px-10 py-2 rounded'}
                    onClick={(function () {
                        let count = 0;
                        return function () {
                            count += 1;
                            if (count === 5) {
                                alert('您已点击五次按钮');
                                count = 0;
                            }
                        };
                    })()}>
                点击5次alert
            </button>

            <button className={'mt-8 bg-blue-400 text-white px-10 py-2 rounded'}
                    onClick={() => {
                        if (counter === 5) {
                            alert('您已点击五次按钮');
                            return setCounter(0)
                        }
                        setCounter(counter + 1)
                    }}>
                点击5次alert
            </button>

        </div>
    );
}

export default App;
