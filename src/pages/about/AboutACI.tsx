import React from "react";

export const AboutACI: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-church-brown mb-8 text-center">
          What is Apostolic Congress International?
        </h2>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          {[
            `Apostolic Congress International is a non-governmental, global inter-denominational Christian organisation. It is a network comprising independent church leaders and ministers of the gospel with similar doctrinal leaning, with its international head office in London, England.`,
            `The major task before the organisation is to provide apostolic leadership to churches, ministries, and governmental officials to enable them to fulfil their God-given roles.`,
            `We are truly convinced that God's will is that all members of His Church should be united in discipline through the operation of the Holy Spirit and the leadership of the Apostles. This unity is vital for working out the mind of God for all mankind.`,
            `We, therefore, affirm that this Congress will not only be structured but also spiritual. We further affirm that the final act of the Holy Spirit before the second coming of our Lord Jesus Christ will result in these three events:`,
          ].map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <ul className="list-disc pl-6 space-y-2">
            {[
              `The preaching of the Gospel of the Kingdom of God for a witness to all nations`,
              `The nurture and discipling of the members of the body of Christ to attain the fullness of the stature of Christ`,
              `The spiritual unity of the Church body on earth under the Lordship of Jesus Christ our King and Saviour`,
            ].map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
