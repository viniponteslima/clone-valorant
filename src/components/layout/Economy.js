import styles from './Economy.module.css';

export default function Economy() {

  function coinsFormat(value) {
    return Math.floor(Math.random() * value).toLocaleString('pt-BR')
  }

  return (
    <div className={styles.economy} >

      <div className={styles.missions}>
        <div className='dailyMission'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <path d="M217.36 53L345.768 181.407L304.847 181.407L217.36 93.9203L217.36 53Z" />
            <path d="M217.36 346.967L345.768 218.56L304.847 218.56L217.36 306.047L217.36 346.967Z" />
            <path d="M182.407 53.0999L53.9999 181.507L94.9203 181.507L182.407 94.0201L182.407 53.0999Z" />
            <path d="M182.407 346.868L53.9999 218.46L94.9203 218.46L182.407 305.947L182.407 346.868Z" />
            <rect x="199.579" y="117.736" width="115.743" height="115.743" transform="rotate(45 199.579 117.736)" className={styles.opacity50to100} />
          </svg>
          <span>{coinsFormat(5)}/4</span>
        </div>
        <div className='weekMission'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="134" stroke="white" strokeWidth="20" className={styles.opacity0to50} />
            <path d="M320 200.239C240.16 200.239 200.239 160.319 200.239 79C200.239 160.319 160.319 200.239 79 200.239C160.319 200.239 200.239 240.16 200.239 320C200.239 240.16 240.16 200.239 320 200.239Z" fill="white"/>
          </svg>
          <span>{coinsFormat(4)}/3</span>
        </div>
      </div>



      <div className={styles.nightMarket}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
          <rect x="118" y="56" width="163" height="288" fill="#DEDBD5"/>
          <rect x="142" y="199.983" width="82" height="82" transform="rotate(-45 142 199.983)" fill="black"/>
        </svg>
      </div>



      <div className={styles.coins}>
        <div className={styles.valorantPoints}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="134" fill='#ffffff' stroke="#ffffff80" strokeWidth="20" className={styles.opacity0to50} />
            <path d="M118.513 132.163C119.512 131.56 120.148 132.779 120.686 133.42C155.336 177.348 190.027 221.243 224.674 265.17C225.385 265.796 224.847 267.133 223.886 266.989C207.297 267.008 190.704 266.996 174.114 266.996C172.785 267.012 171.513 266.341 170.698 265.292C153.484 243.499 136.281 221.696 119.068 199.9C118.337 199.019 117.959 197.88 118.006 196.734C118.006 175.679 118.013 154.62 118 133.564C118.009 133.066 117.991 132.421 118.513 132.163Z" fill="white"/>
            <path d="M279.576 132.062C280.295 131.792 281.087 132.453 280.982 133.202C281.007 154.18 280.979 175.157 280.995 196.134C281.042 197.322 280.781 198.552 280.004 199.486C274.699 206.09 269.387 212.691 264.081 219.291C263.196 220.435 261.749 221.067 260.302 220.994C243.586 220.978 226.868 221.004 210.152 220.982C209.165 221.134 208.603 219.809 209.331 219.17C232.512 190.318 255.712 161.476 278.905 132.63C279.081 132.383 279.305 132.192 279.576 132.062Z" fill="white"/>
          </svg>
          <span>{coinsFormat(5000)}</span>
        </div>

        <div className={styles.valorantPoints}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="134" fill='#ffffff' stroke="#ffffff80" strokeWidth="20" className={styles.opacity0to50} />
            <rect x="160" y="188" width="25" height="72" fill="white"/>
            <path d="M203 213H232L260 260H231L203 213Z" fill="white"/>
            <path d="M227.5 146C236.385 146 244.906 149.529 251.188 155.812C257.471 162.094 261 170.615 261 179.5C261 188.385 257.471 196.906 251.188 203.188C244.906 209.471 236.385 213 227.5 213L227.5 188.007C229.756 188.007 231.92 187.111 233.516 185.516C235.111 183.92 236.007 181.756 236.007 179.5C236.007 177.244 235.111 175.08 233.516 173.484C231.92 171.889 229.756 170.993 227.5 170.993L227.5 146Z" fill="white"/>
            <path d="M139 146H228V171H159.195L139 146Z" fill="white"/>
            <rect x="185" y="188" width="43" height="25" fill="white"/>
          </svg>
          <span>{coinsFormat(5000)}</span>
        </div>
        
        <div className={styles.valorantPoints}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
            <rect x="72.1421" y="222.664" width="212.87" height="148.818" transform="rotate(-45 72.1421 222.664)" fill='#ffffff' stroke="#ffffff80" strokeWidth="20" className={styles.opacity0to50} />
            <path d="M135.403 248.74L135.408 193.145L164.403 163.74L164.33 219.404L135.403 248.74Z" fill="white"/>
            <path d="M178.403 205.74L178.408 150.145L207.403 120.74L207.33 176.404L178.403 205.74Z" fill="white"/>
            <path d="M180.909 202.74L226.864 248.74L185.903 248.74L160.461 223.188L180.909 202.74Z" fill="white"/>
          </svg>
          <span>{coinsFormat(10000)}</span>
        </div>

      </div>
    </div>
  );
}