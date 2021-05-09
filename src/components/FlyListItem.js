import React from 'react';

const FlyListItem = ({ destination }) => {
  console.log();

  return (
    <div className="fly-list-item-container">
      <div
        className={`fly-list-item-dep-des-container${
          destination.get('to')
            ? ''
            : ' fly-list-item-dep-des-container-middle-size'
        }`}
      >
        <div
          className={`fly-list-item-departure-destination none-top-border${
            destination.get('to')
              ? ''
              : ' fly-list-item-departure-destination-middle-size'
          }`}
        >
          <div className="fly-list-item">
            <div className="fly-list-item-icon">
              <img
                src="https://image.freepik.com/iconos-gratis/avion-volando_318-1385.jpg"
                alt="scale"
              />
            </div>
            <div className="fly-list-item-descriptio">
              <p>{`${destination.get('from').from} - ${
                destination.get('from').dTime
              }`}</p>
            </div>
          </div>
          <div className="fly-list-item">
            <div className="fly-list-item-icon">
              <img
                src="https://images.vexels.com/media/users/3/128926/isolated/preview/c60c97eba10a56280114b19063d04655-icono-redondo-del-aeropuerto-de-avi-oacute-n-by-vexels.png"
                alt="scale"
              />
            </div>
            <div className="fly-list-item-descriptio">
              <p>{`Duration ${destination.get('from').duration} - Scales: ${
                destination.get('from').scales > 0
                  ? destination.get('from').scales
                  : 'none'
              }`}</p>
            </div>
          </div>
          <div className="fly-list-item">
            <div className="fly-list-item-icon">
              <img
                src="https://image.freepik.com/iconos-gratis/avion-volando_318-1385.jpg"
                alt="scale"
              />
            </div>
            <div className="fly-list-item-descriptio">
              <p>{`${destination.get('from').to} - ${
                destination.get('from').aTime
              }`}</p>
            </div>
          </div>
        </div>

        <div
          className={`fly-list-item-departure-destination${
            destination.get('to') ? '' : ' hidde-container'
          }`}
        >
          {destination.get('to') ? (
            <>
              <div className="fly-list-item">
                <div className="fly-list-item-icon">
                  <img
                    src="https://image.freepik.com/iconos-gratis/avion-volando_318-1385.jpg"
                    alt="scale"
                  />
                </div>
                <div className="fly-list-item-descriptio">
                  <p>{`${destination.get('to').from} - ${
                    destination.get('to').dTime
                  }`}</p>
                </div>
              </div>
              <div className="fly-list-item">
                <div className="fly-list-item-icon">
                  <img
                    src="https://images.vexels.com/media/users/3/128926/isolated/preview/c60c97eba10a56280114b19063d04655-icono-redondo-del-aeropuerto-de-avi-oacute-n-by-vexels.png"
                    alt="scale"
                  />
                </div>
                <div className="fly-list-item-descriptio">
                  <p>{`Duration ${destination.get('to').duration} - Scales: ${
                    destination.get('to').scales > 0
                      ? destination.get('to').scales
                      : 'none'
                  }`}</p>
                </div>
              </div>
              <div className="fly-list-item">
                <div className="fly-list-item-icon">
                  <img
                    src="https://image.freepik.com/iconos-gratis/avion-volando_318-1385.jpg"
                    alt="scale"
                  />
                </div>
                <div className="fly-list-item-descriptio">
                  <p>{`${destination.get('to').to} - ${
                    destination.get('to').aTime
                  }`}</p>
                </div>
              </div>{' '}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className={`fly-list-item-price${
          destination.get('to') ? '' : ' fly-list-item-price-middle-size'
        }`}
      >
        <p>€ {destination.get('from').totalPrice}</p>
      </div>
    </div>
  );
};

export default FlyListItem;
