/**
 * @license MIT
 * @author Ritika Choudhary <ritikachoudhary686@gmail.com>
 * @copyright Ritika Choudhary 2025
 */


'use strict';

/**
 * Fetch data from server
 * @param{*} url API Url [required]
 * @param{*} successCallback Success callback [required]
 * @param{*} errorCallback Error Callback[optional]
 */

export async function fetchData(url,successCallback,errorCallback) {
    const response=await fetch(url);
    if(response.ok){
        const data=await response.json();
        successCallback(data);
    }
    else{
        const error=await response.json();
        errorCallback && errorCallback(error);
    }
}