import React from 'react'

import './RecentComments.css'


function RecentComments() {
  return (
    <div className='RecentComments-container'>
        <div className='RC-header'>
            <h2>Recent Comments</h2>
        </div>
        <div className="RC-body">
            <div className='blue RC-List'>
                <div className='RC-List-left'>
                    <span>
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13.4444L4.11111 10.3333M15 4.11111H1H15ZM15 4.11111L11.8889 7.22222L15 4.11111ZM15 4.11111L11.8889 1L15 4.11111ZM1 13.4444H15H1ZM1 13.4444L4.11111 16.5556L1 13.4444Z" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span>Date</span>
                    <span>Child</span>
                    <span>Thread</span>
                </div>
                <div className="RC-list-right">
                    <span>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.6C1 3.64522 1.37928 2.72955 2.05442 2.05442C2.72955 1.37928 3.64522 1 4.6 1H15.4C16.3548 1 17.2705 1.37928 17.9456 2.05442C18.6207 2.72955 19 3.64522 19 4.6V15.4C19 16.3548 18.6207 17.2705 17.9456 17.9456C17.2705 18.6207 16.3548 19 15.4 19H4.6C3.64522 19 2.72955 18.6207 2.05442 17.9456C1.37928 17.2705 1 16.3548 1 15.4V4.6Z" stroke="#FFFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.25 8.5C7.49264 8.5 8.5 7.49264 8.5 6.25C8.5 5.00736 7.49264 4 6.25 4C5.00736 4 4 5.00736 4 6.25C4 7.49264 5.00736 8.5 6.25 8.5Z" stroke="#FFFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.6734 10.589L4 19.0302H14.9197C15.8427 19.0302 16.728 18.6635 17.3806 18.0108C18.0333 17.3581 18.4 16.4729 18.4 15.5499V15.4302C18.4 15.0108 18.2425 14.8497 17.959 14.5392L14.332 10.5836C14.163 10.3993 13.9573 10.2521 13.7283 10.1516C13.4992 10.0511 13.2517 9.9995 13.0015 10C12.7514 10.0005 12.5041 10.0532 12.2754 10.1546C12.0467 10.256 11.8417 10.404 11.6734 10.589V10.589Z" stroke="#FFFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </span>
                    <span>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9375 0H0.8125L0 0.8125V5.6875L0.8125 6.5H1.625V20.3125L2.4375 21.125H20.3125L21.125 20.3125V6.5H21.9375L22.75 5.6875V0.8125L21.9375 0ZM20.3125 4.875H1.625V1.625H21.125V4.875H20.3125ZM3.25 19.5V6.5H19.5V19.5H3.25ZM16.25 9.75H6.5V11.375H16.25V9.75Z" fill="white"/>
                        </svg>
                    </span>
                    <span>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6738 0.81914C10.6736 0.64846 10.7268 0.482003 10.826 0.343064C10.9251 0.204124 11.0652 0.0996551 11.2267 0.0442763C11.3881 -0.0111025 11.5628 -0.0146197 11.7264 0.0342169C11.8899 0.0830534 12.0341 0.1818 12.1387 0.316637L17.8676 7.68232C17.9794 7.82598 18.04 8.00281 18.04 8.18482C18.04 8.36684 17.9794 8.54366 17.8676 8.68732L12.1387 16.053C12.0341 16.1878 11.8899 16.2866 11.7264 16.3354C11.5628 16.3843 11.3881 16.3807 11.2267 16.3254C11.0652 16.27 10.9251 16.1655 10.826 16.0266C10.7268 15.8876 10.6736 15.7212 10.6738 15.5505V12.2851C6.27156 12.3767 4.15679 13.2123 3.0945 14.1207C2.08458 14.9842 1.89962 15.9998 1.7073 17.0637L1.65737 17.3379C1.62065 17.5341 1.5135 17.7101 1.35608 17.8328C1.19867 17.9555 1.00184 18.0164 0.802631 18.0042C0.60342 17.9919 0.41556 17.9073 0.274391 17.7662C0.133223 17.6251 0.048481 17.4373 0.0361042 17.2381C-0.103844 14.9891 0.106487 11.7302 1.69502 9.00405C3.2369 6.35813 6.01377 4.32357 10.6738 4.11078V0.81914Z" fill="white"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="RC-text">
                <p>No comments in the last two weeks.</p>
            </div>
        </div>
    </div>
  )
}

export default RecentComments;