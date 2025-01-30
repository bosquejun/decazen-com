import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import { UserProfileSchemaType } from '@/forms/auth/schema/auth.schema';
import UserProfileForm from '@/forms/auth/user-profile.form';
import { motion } from 'framer-motion';

export default function UserProfileSection({
  onSubmit,
}: {
  onSubmit: (data: UserProfileSchemaType) => Promise<void>;
}) {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        ease: 'linear',
        duration: 0.5,
      }}
    >
      <CardDashedGridLines className="p-8 flex flex-col items-center min-w-64 space-y-8">
        <h2 className="text-2xl font-semibold">Complete your profile</h2>
        <UserProfileForm defaultValues={{}} onSubmit={onSubmit} />
      </CardDashedGridLines>
    </motion.div>
  );
}
