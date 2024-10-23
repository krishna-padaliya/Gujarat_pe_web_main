import err from '../assets/img/404.webp'

function Error() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-12 mt-5 mb-5 m-auto text-center">
                <img src={err} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Error
