'use client';
import { ContentLayout } from '@/components/ContentLayout';
import { cn } from '@/lib/utils';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';

const FAQs = [
  {
    question: 'What is the purpose of this website?',
    answer:
      'This website is a place to help you find the best products and services in the world.',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can contact support by email at support@example.com or by phone at 123-456-7890.',
  },
  {
    question: 'How do I find the best products?',
    answer:
      'You can find the best products by searching for them on the search page or by browsing the categories.',
  },
  {
    question: 'Can I return a product?',
    answer:
      'Yes, you can return a product within 30 days of purchase. Please refer to our return policy for more details.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on the destination.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'You can track your order by logging into your account and visiting the order history page. You will also receive a tracking number via email once your order has shipped.',
  },
];
export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <ContentLayout>
      <div className="w-full flex flex-col items-center">
        <motion.h1
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5,
          }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center max-w-6xl mx-auto mt-6 relative z-10 w-full"
        >
          <Balancer>Frequently asked questions</Balancer>
        </motion.h1>
        <motion.p
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-6 text-base md:text-lg text-neutral-500 dark:text-neutral-400 md:max-w-xl text-center relative z-10"
        >
          <Balancer>
            We are here to help you with any questions you may have. If you
            don&apos;t find what you need, please contact us at{' '}
            <a
              href="mailto:support@decazen.com"
              className="text-primary-500 dark:text-primary underline"
            >
              support@decazen.com
            </a>
          </Balancer>
        </motion.p>
      </div>
      <div className="mx-auto mt-10 w-full max-w-3xl">
        {FAQs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              open={open}
              setOpen={setOpen}
            />
          </motion.div>
        ))}
      </div>
    </ContentLayout>
  );
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <div
      className="mb-8 w-full cursor-pointer rounded-lg bg-content2 p-4 shadow-input dark:bg-content1"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconChevronUp
            className={cn(
              'absolute inset-0 h-6 w-6 transform text-black transition-all duration-200 dark:text-white',
              isOpen && 'rotate-90 scale-0'
            )}
          />
          <IconChevronDown
            className={cn(
              'absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-black transition-all duration-200 dark:text-white',
              isOpen && 'rotate-0 scale-100'
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                {answer.split('').map((line, index) => (
                  <motion.span
                    initial={{ opacity: 0, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeOut',
                      delay: index * 0.005,
                    }}
                    key={index}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
