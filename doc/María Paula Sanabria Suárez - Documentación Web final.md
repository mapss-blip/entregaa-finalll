# María Paula Sanabria Suárez - Documentación Web final

- [Librerias, frameworks e I.A.](./tm112-maria-paula-sanabria-suarez)

## Repositorio

> Modifiqué el título `Repositorio`
> para poder tener un índice mejor organizado.
> [name=ruidajo] [time=lun., 4 de may. de 2026 6:39]

https://github.com/mapss-blip/Entregaa-finalll

## Antecedentes

- [Prompt para humanos](./mp.sanabrias1:02).
- https://mapssss.hotglue.me/
- https://mapss-blip.github.io/tm1/
    - Repo: https://github.com/mapss-blip/tm1
- https://mapss-blip.github.io/recorridooooo-virtuallllll/
    - Repo: https://github.com/mapss-blip/recorridooooo-virtuallllll
- https://mapss-blip.github.io/oraculo-IT/
    - Repo: https://github.com/mapss-blip/oraculo-IT

> Agregué la sección `Antecedentes`
> con el listado de entregables como recursos y referencia.
> [name=ruidajo] [time=lun., 4 de may. de 2026 6:26]

### Referentes
- https://cargo.site/templates/preview/3283619 --- De este me gusta el modelo de las tarjetas, me recuerda a un tablero de corcho 
- https://cargo.site/templates/preview/2659118 --- Me gusta el modeo tipo postales, y como de la postal sale la información, siento que me gustaría implementar eso
- https://jaimerodriguezgomez.com/proyectos/aguasoy/ --- De este me gusta la simpleza estética / el mnimalismo de esto 
- https://jaimerodriguezgomez.com/proyectos/amor-en-pixeles/ --- En esta me gusta el concepto de los pixeles como motor etético de la narrativa
----


#### Lighthouse 
![](https://notes.commonscomputer.com/uploads/1bc161ac-8dec-4fc2-befd-560ce65936cd.png)

----

#### Hydra
https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBtb2lyZSUwQSUyRiUyRiUyMGJ5JTIwT2xpdmlhJTIwSmFjayUwQSUyRiUyRiUyMHR3aXR0ZXIlM0ElMjAlNDBfb2phY2tfJTBBcGF0dGVybiUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwb3NjKDIwMCUyQyUyMDAuNDU4KSUwQSUwOS5rYWxlaWQoMjAwKSUwQSUwOS5zY2FsZSgxJTJDJTIwMC40KSUzQiUwQSUyRiUyRiUyMCUwQXBhdHRlcm4oKSUwQSUwOS5zY3JvbGxYKDAuMTQ4JTJDJTIwMC4wMSklMEElMDkubXVsdChwYXR0ZXJuKCkpJTBBJTA5Lm91dCgpJTNC

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// moire
// by Olivia Jack
// twitter: @_ojack_
pattern = () => osc(200, 0.458)
	.kaleid(200)
	.scale(1, 0.4);
// 
pattern()
	.scrollX(0.148, 0.01)
	.mult(pattern())
	.out();

https://hydra.ojack.xyz/?sketch_id=ritchse_0
    
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//random trypophobia - changes everytime you load it!
//by Ritchse
//instagram.com/ritchse
 
function r(min=0,max=1) { return Math.random()*(max-min)+min; }
 
solid(1,1,1)
  	.diff(shape([4,4,4,24].smooth().fast(.5),r(0.6,0.93),.09).repeat(20,10))
	.modulateScale(osc(8).rotate(r(-.5,.5)),.52)
	.add(
  		src(o0).scale(0.965).rotate(.012*(Math.round(r(-2,1))))
  		.color(r(),r(),r())
    	.modulateRotate(o0,r(0,0.5))
  		.brightness(.15)
  		,.7)
	.out() 
    
https://hydra.ojack.xyz/?code=JTJGJTJGJTIwbGljZW5zZWQlMjB3aXRoJTIwQ0MlMjBCWS1OQy1TQSUyMDQuMCUyMGh0dHBzJTNBJTJGJTJGY3JlYXRpdmVjb21tb25zLm9yZyUyRmxpY2Vuc2VzJTJGYnktbmMtc2ElMkY0LjAlMkYlMEElMkYlMkYlMjBDTkRTRCUwQSUyRiUyRiUyMGh0dHAlM0ElMkYlMkZtYWxpdHppbmNvcnRlcy5uZXQlMkYlMEElMkYlMkYlMjBzYW5kJTIwc3BpcmFscyUwQW9zYygzJTJDJTIwMC4wMSUyQyUyMDAuNCklMEElMDkuY29sb3IoMS4yJTJDJTIwMS4yJTJDJTIwMS4zKSUwQSUwOS5zYXR1cmF0ZSgwLjQpJTBBJTA5Lm1vZHVsYXRlUmVwZWF0KG9zYygyKSUyQyUyMDElMkMlMjAyJTJDJTIwNCUyQyUyMDMpJTBBJTA5Lm1vZHVsYXRlS2FsZWlkKG9zYygxMiUyQyUyMDAuMDUlMkMlMjAwKSUyQyUyMDEpJTBBJTA5Lmx1bWEoMC40KSUwQSUwOS5yb3RhdGUoNCUyQyUyMDAuMTIlMkMlMjAwKSUwQSUwOS5tb2R1bGF0ZShvMCUyQyUyMCgpJTIwJTNEJTNFJTIwbW91c2UueSUyMColMjAwLjAwMDIpJTBBJTA5LnNjYWxlKDEpJTBBJTA5LmRpZmYobzEpJTBBJTA5Lm91dChvMCklM0I%3D
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// CNDSD
// http://malitzincortes.net/
// sand spirals
osc(3, 0.01, 0.4)
	.color(1.2, 1.2, 1.3)
	.saturate(0.4)
	.modulateRepeat(osc(2), 1, 2, 4, 3)
	.modulateKaleid(osc(12, 0.05, 0), 1)
	.luma(0.4)
	.rotate(4, 0.12, 0)
	.modulate(o0, () => mouse.y * 0.0002)
	.scale(1)
	.diff(o1)
	.out(o0);
    
----


    