import React from "react"
import data from "../yourdata"
import Fade from "react-reveal/Fade"


import "../styles/Header.scss"
import "../styles/include-media.scss"


const Publications = () => {
    return (
        <div className="section">
            <div className="container">
                <Fade top>
                <h1>Publications</h1>
                </Fade>
                <div className="publications">
                    <div classsName="row">
                        <div className="publication">
                            <table class = 'noBorder'>
                                <tbody class='noBorder'>
                                    <tr class='noBorder'>
                                        <td class='noBorderimg'>
                                            <div >
                                                <img className="image-wrapper" src={data.zeroshot} alt="Vasanth" />
                                            </div>
                                        </td>
                                        <td class='noBorderdetails'>
                                            <h4>
                                                <a href="https://arxiv.org/pdf/2011.07126.pdf">
                                                    Zero-shot Learning for Relation Extraction
                                                </a>
                                            </h4>
                                            <span>CIKM'21</span>
                                            <div>
                                                <span>Summary:  </span>
                                                 Zero shot learner
                                                <br/>
                                                <span>
                                                    [
                                                    <a href="https://arxiv.org/pdf/2011.07126.pdf">Paper</a>
                                                    ]
                                                </span>
                                                <br/>
                                                We demonstrate using extensive experiments on two public datasets (NYT and FewRel)
that our proposed model significantly outperforms state-ofthe-art methods on supervised learning, few-shot learning
and zero-shot learning tasks. Our experimental results also
demonstrate the effectiveness and robustness of our proposed
model in a combination scenario. Once accepted for publication, we will publish ZSLRE’s source code and datasets to
enable reproducibility and encourage further research.
                                            </div>
                                            
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Publications