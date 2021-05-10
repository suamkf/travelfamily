import React from 'react';

const FlyListItem = ({ destination }) => {
  /*depending on the search result (round trip or one-way trip) 
  the appropriate components are displayed*/
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
              <p>{`${destination.get('from').from} (${
                destination.get('from').flyFrom
              }) - ${destination.get('from').to} (${
                destination.get('from').flyTo
              })`}</p>
            </div>
          </div>
          <div className="fly-list-item">
            <div className="fly-list-item-icon">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/633/173/non_2x/clock-icon-symbol-sign-vector.jpg"
                alt="scale"
              />
            </div>
            <div className="fly-list-item-descriptio">
              <p>{`Duration ${destination.get('from').duration} - ${
                destination.get('from').scales > 0
                  ? ` Stopover: ${destination.get('from').scales}`
                  : 'Direct'
              }`}</p>
            </div>
          </div>
          <div className="fly-list-item">
            <div className="fly-list-item-icon">
              <img
                src="https://as2.ftcdn.net/jpg/02/29/85/83/500_F_229858326_kfebVS5aUKkk12v1aEEaDE69rTc2AMEk.jpg"
                alt="scale"
              />
            </div>
            <div className="fly-list-item-descriptio">
              <p>{`Dep: ${destination.get('from').dTime} - Arr: ${
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
                  <p>{`${destination.get('to').from} (${
                    destination.get('to').flyFrom
                  }) - ${destination.get('to').to} (${
                    destination.get('to').flyTo
                  })`}</p>
                </div>
              </div>
              <div className="fly-list-item">
                <div className="fly-list-item-icon">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/000/633/173/non_2x/clock-icon-symbol-sign-vector.jpg"
                    alt="scale"
                  />
                </div>
                <div className="fly-list-item-descriptio">
                  <p>{`Duration ${destination.get('to').duration} - ${
                    destination.get('to').scales > 0
                      ? ` Stopover: ${destination.get('to').scales}`
                      : 'Direct'
                  }`}</p>
                </div>
              </div>
              <div className="fly-list-item">
                <div className="fly-list-item-icon">
                  <img
                    src="https://as2.ftcdn.net/jpg/02/29/85/83/500_F_229858326_kfebVS5aUKkk12v1aEEaDE69rTc2AMEk.jpg"
                    alt="scale"
                  />
                </div>
                <div className="fly-list-item-descriptio">
                  <p>{`Dep: ${destination.get('to').dTime} - Arr: ${
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
