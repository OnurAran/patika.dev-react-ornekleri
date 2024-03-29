import React from 'react'
import '../style/About.css'

function About() {
    return (
        <div className='page'>
            <div className='About'>
                <h1 className='title'>
                    Vücut Kitle Endeksi nedir?
                </h1>

                <p className='paragraph'>
                    Yetişkin bir insanın ağırlığının, boyuna göre normal olup olmadığını gösteren bir parametredir.
                    İngilizcede "Body Mass Index" veya kısa adıyla "BMI" şeklinde ifade edilmektedir.
                    Aşağıda görülen Vücut Kitle Endeksi (VKE, VKİ veya BKİ) tablosunda kilogram cinsinden
                    ağırlık ve metre cinsinden boyun kesiştiği noktanın içinde bulunan alan ile kilonun
                    ideal olup olmadığı tespit edilebilmektedir. Eğer mevcut ağırlığınız idealin altında
                    ya da üstünde ise ideal noktaya ulaşabilmek için izlenecek yol, kısa sürede fazla miktarda
                    kilo kaybetmek ya da almak değil,adım adım sağlıklı kiloya ulaşmak ve bu düzeyi uzun dönemde korumaktır.
                </p>
            </div>

        </div>
    )
}

export default About;