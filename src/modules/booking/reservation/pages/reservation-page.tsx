const ReservationPage = () => {
  return (
    <div>
      <h1>1.Select your delivery program</h1>
      <form>
        <fieldset>
          <div>
            <input
              type='radio'
              id='factory-delivery'
              name='factory-delivery'
              value='factory-delivery'
              checked
            />
            <label htmlFor='factory-delivery'>factory-delivery</label>
          </div>

          <div>
            <input
              type='radio'
              id='factory-delivery-advanced'
              name='factory-delivery-advanced'
              value='factory-delivery-advanced'
            />
            <label htmlFor='factory-delivery-advanced'>
              factory-delivery-advanced
            </label>
          </div>

          <div>
            <input
              type='radio'
              id='factory-delivery-accelerate'
              name='factory-delivery-accelerate'
              value='factory-delivery-accelerate'
            />
            <label htmlFor='factory-delivery-accelerate'>Louie</label>
          </div>
        </fieldset>
        <button type='submit'>Next step</button>
      </form>
    </div>
  )
}

export { ReservationPage }
