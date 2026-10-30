// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import { View, Text, Image, StyleSheet, Platform, useWindowDimensions,} from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';
const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

const COLORS = {
  background: '#EEF1F6',
  card: '#FFFFFF',
  text: '#1F2937',
  muted: '#6B7280',
  primary: '#6366F1',
  primaryLight: '#EEF2FF',
  border: '#E5E7EB',
  online: '#22C55E',
  white: '#FFFFFF',
  shadow: '#000000',
};

// Bonus
function StatItem({ label, value, showDivider }) {
  return (
    <View style={[styles.stat, showDivider && styles.statDivider]}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Tag({ label }) {
  return (
    <View style={styles.skillTag}>
      <Text style={styles.skillText}>{label}</Text>
    </View>
  );
}

export default function App() {
  // Bonus: 
  const { width } = useWindowDimensions();
  const isWide = width > 600;

  return (
    <View style={styles.screen}>
   {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      <View style={[styles.card, isWide && styles.cardWide]}>
       {/* TODO STEP 2: add the banner and the avatar with Image */}
        <Image
          style={styles.banner}
          resizeMode="cover"
          source={require('./assets/banner.png')}
        />

        <View style={styles.cardBody}>
          <View style={styles.headerRow}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatar}
                source={require('./assets/avatar.png')}
              />

              {/* TODO STEP 3: header row and stats row with Flexbox */}
              <View style={styles.onlineBadge} />
            </View>

            <View style={styles.headerText}>
              <Text style={styles.name}>Alex Rivera</Text>
              <Text style={styles.role}>Mobile Developer</Text>
              <Text style={styles.location}>Lisbon, Portugal</Text>
            </View>
          </View>

          {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>

       
          <View style={styles.statsRow}>
            {STATS.map((stat, index) => (
              <StatItem
                key={stat.label}
                label={stat.label}
                value={stat.value}
                showDivider={index < STATS.length - 1}
              />
            ))}
          </View>

          <View style={styles.skillsSection}>
            <Text style={styles.skillsTitle}>Skills</Text>

            <View style={styles.skillsRow}>
              {SKILLS.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </View>
          </View>

          <View style={styles.buttonsRow}>
            <View style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </View>

            <View style={styles.messageButton}>
              <Text style={styles.messageText}>Message</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
// TODO STEP 5: polish the styles (colors, typography, shadow)
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: 20,
    overflow: 'hidden',

    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.12,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  cardWide: {
    maxWidth: 420,
    alignSelf: 'center',
  },

  cardBody: {
    padding: 20,
  },

  banner: {
    width: '100%',
    height: 120,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -48,
  },

  avatarWrapper: {
    width: 96,
    height: 96,
    position: 'relative',
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: COLORS.white,
  },

  onlineBadge: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.online,
    borderWidth: 3,
    borderColor: COLORS.white,
    right: 4,
    bottom: 4,
  },

  headerText: {
    flex: 1,
    marginLeft: 14,
    paddingTop: 48,
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text,
  },

  role: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
  },

  location: {
    marginTop: 2,
    fontSize: 14,
    color: COLORS.muted,
  },

  bio: {
    marginTop: 18,
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.text,
  },

  statsRow: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statDivider: {
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
  },

  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },

  statLabel: {
    marginTop: 3,
    fontSize: 12,
    color: COLORS.muted,
  },

  skillsSection: {
    marginTop: 20,
  },

  skillsTitle: {
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: COLORS.muted,
  },

  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: COLORS.primaryLight,
  },

  skillText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },

  buttonsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 22,
  },

  followButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
  },

  followText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.white,
  },

  messageButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  messageText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
});