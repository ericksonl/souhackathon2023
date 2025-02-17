# Shakespearean to Gen-Z
### 2nd Place Winner in the Southern Oregon University Hackathon 2023

## Inspiration
Shakespeare is well known for having introduced thousands of new words to the the English vocabulary. Although many are used to this day, some have not been used since his time. Listening to the slang of Gen-Z and Gen-Alpha, I often feel like I'm reading a play written by Shakespeare. I can pick out a few words, but I leave feeling confused and angry. How do they expect generations, who have seemingly invented their own language, to read the great works of William Shakespeare? The answer is simple:
Translate it to Gen-Z slang.

## What it does
Converts Shakespearean text into Gen-Z slang english, and English to Shakspearean

![StoE](https://github.com/ericksonl/souhackathon2023/blob/dev/assets/StoE.PNG)

![StoE2](https://github.com/ericksonl/souhackathon2023/blob/dev/assets/StoE2.PNG)

## How it was built
* Shakespearean -> english
  * I created a dictionary with all the words I could find that were most commonly used in Shakespeare plays. Then, I mapped these words to an english equivalent, adding some spice where I saw fit. Given the input text, it is scanned for any words that are present in the dictionary, and responds with the translated text.

* English to Shakespeare
  * Using Fun Translations API, I send a fetch request with the given text, and it replies with a translation.  

## Challenges I ran into
I grossly underestimated just how many words I would need to map. The dictionary is still not complete, but given more time I would be able to map these out.
Many of the same words had different meanings. For example, Cheerely, which can be used as an exclamation, or as in "cheerful."
I did not have enough time to check for phrases, which requires a completely new dictionary.
The Fun Translation API only allows 5 calls per hour, which is less than convenient, and I very quickly ran into rate limiting issues. Be forewarned.

![API](https://github.com/ericksonl/souhackathon2023/blob/dev/assets/IHateAPIs.PNG)

## What I learned
Translating to Shakespearean is easy, but translating from Shakespearean is very difficult.

## Try it for yourself
[https://www.liamedev.com/](https://www.liamedev.com/code/SPTranslator/SPtoGenZ/)
